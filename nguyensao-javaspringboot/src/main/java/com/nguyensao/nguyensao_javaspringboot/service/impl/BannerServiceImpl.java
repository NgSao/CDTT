package com.nguyensao.nguyensao_javaspringboot.service.impl;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.BannerDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Banner;
import com.nguyensao.nguyensao_javaspringboot.repository.BannerRepository;
import com.nguyensao.nguyensao_javaspringboot.service.BannerService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BannerServiceImpl implements BannerService {
    private final BannerRepository bannerRepository;

    @Override
    public List<Banner> index() {
        return bannerRepository.findByStatusIn(Arrays.asList(1, 2));
    }

    @Override
    public List<Banner> trash() {
        return bannerRepository.findByStatus(0);
    }

    @Override
    public Banner show(Long id) {
        return bannerRepository.findById(id).orElse(null);
    }

    @Override
    public Banner store(BannerDTO bannerDTO) {
        Banner banner = new Banner();
        banner.setName(bannerDTO.getName());
        banner.setLink(bannerDTO.getLink());
        banner.setImage(bannerDTO.getImage());
        banner.setDescription(bannerDTO.getDescription());
        banner.setPosition(bannerDTO.getPositionBanner());
        banner.setCreatedAt(LocalDateTime.now());
        banner.setCreatedBy(1);
        banner.setStatus(1);
        return bannerRepository.save(banner);
    }

    @Override
    public Banner update(Long id, BannerDTO bannerDTO) {
        Banner banner = show(id);
        if (banner != null) {
            banner.setName(bannerDTO.getName());
            banner.setLink(bannerDTO.getLink());
            banner.setImage(bannerDTO.getImage());
            banner.setDescription(bannerDTO.getDescription());
            banner.setPosition(bannerDTO.getPositionBanner());
            banner.setUpdatedAt(LocalDateTime.now());
            banner.setUpdatedBy(1);
            return bannerRepository.save(banner);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        Banner banner = show(id);
        if (banner != null) {
            banner.setStatus(banner.getStatus() == 1 ? 2 : 1);
            bannerRepository.save(banner);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void delete(Long id) {
        Banner banner = show(id);
        if (banner != null) {
            if (banner.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            banner.setStatus(0);
            bannerRepository.save(banner);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        Banner banner = show(id);
        if (banner != null) {
            if (banner.getStatus() == 1) {
                throw new IllegalArgumentException("Không có topic nào.");
            }
            banner.setStatus(1);
            bannerRepository.save(banner);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void destroy(Long id) {
        Banner banner = show(id);
        if (banner != null) {
            bannerRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}
