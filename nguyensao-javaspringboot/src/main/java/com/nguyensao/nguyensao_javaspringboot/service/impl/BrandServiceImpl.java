package com.nguyensao.nguyensao_javaspringboot.service.impl;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.BrandDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Brand;
import com.nguyensao.nguyensao_javaspringboot.repository.BrandRepository;
import com.nguyensao.nguyensao_javaspringboot.service.BrandService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BrandServiceImpl implements BrandService {
    private final BrandRepository brandRepository;

    @Override
    public List<Brand> index() {
        return brandRepository.findByStatusIn(Arrays.asList(1, 2));
    }

    @Override
    public List<Brand> trash() {
        return brandRepository.findByStatus(0);
    }

    @Override
    public Brand show(Long id) {
        return brandRepository.findById(id).orElse(null);
    }

    @Override
    public Brand store(BrandDTO brandDTO) {
        Brand brand = new Brand();
        brand.setName(brandDTO.getName());
        brand.setSlug(brandDTO.getSlug());
        brand.setThumbnail(brandDTO.getThumbnail());
        brand.setDescription(brandDTO.getDescription());
        brand.setCreatedAt(LocalDateTime.now());
        brand.setCreatedBy(1);
        brand.setStatus(1);
        return brandRepository.save(brand);
    }

    @Override
    public Brand update(Long id, BrandDTO brandDTO) {
        Brand brand = show(id);
        if (brand != null) {
            brand.setName(brandDTO.getName());
            brand.setSlug(brandDTO.getSlug());
            brand.setThumbnail(brandDTO.getThumbnail());
            brand.setDescription(brandDTO.getDescription());
            brand.setUpdatedAt(LocalDateTime.now());
            brand.setUpdatedBy(1);
            return brandRepository.save(brand);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        Brand brand = show(id);
        if (brand != null) {
            brand.setStatus(brand.getStatus() == 1 ? 2 : 1);
            brandRepository.save(brand);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void delete(Long id) {
        Brand brand = show(id);
        if (brand != null) {
            if (brand.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            brand.setStatus(0);
            brandRepository.save(brand);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        Brand brand = show(id);
        if (brand != null) {
            if (brand.getStatus() == 1) {
                throw new IllegalArgumentException("Không có topic nào.");
            }
            brand.setStatus(1);
            brandRepository.save(brand);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void destroy(Long id) {
        Brand brand = show(id);
        if (brand != null) {
            brandRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}