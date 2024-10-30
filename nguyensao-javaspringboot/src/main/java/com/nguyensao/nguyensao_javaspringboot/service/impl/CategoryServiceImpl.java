package com.nguyensao.nguyensao_javaspringboot.service.impl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.CategoryDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Category;
import com.nguyensao.nguyensao_javaspringboot.repository.CategoryRepository;
import com.nguyensao.nguyensao_javaspringboot.service.CategoryService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> index() {
        return categoryRepository.findByStatusIn(Arrays.asList(1, 2));

    }

    @Override
    public List<Category> trash() {
        return categoryRepository.findByStatus(0);
    }

    @Override
    public Category show(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public Category store(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setName(categoryDTO.getName());
        category.setSlug(categoryDTO.getSlug());
        category.setThumbnail(categoryDTO.getThumbnail());
        category.setDescription(categoryDTO.getDescription());
        category.setParentId(categoryDTO.getParentId());
        category.setCreatedAt(LocalDateTime.now());
        category.setCreatedBy(1);
        category.setStatus(1);
        return categoryRepository.save(category);

    }

    @Override
    public Category update(Long id, CategoryDTO categoryDTO) {
        Category category = show(id);
        if (category != null) {
            category.setName(categoryDTO.getName());
            category.setSlug(categoryDTO.getSlug());
            category.setThumbnail(categoryDTO.getThumbnail());
            category.setDescription(categoryDTO.getDescription());
            category.setParentId(categoryDTO.getParentId());
            category.setUpdatedAt(LocalDateTime.now());
            category.setUpdatedBy(1);
            return categoryRepository.save(category);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        Category category = show(id);
        if (category != null) {
            category.setStatus(category.getStatus() == 1 ? 2 : 1);
            categoryRepository.save(category);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void delete(Long id) {
        Category category = show(id);
        if (category != null) {
            if (category.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            category.setStatus(0);
            categoryRepository.save(category);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        Category category = show(id);
        if (category != null) {
            if (category.getStatus() == 1) {
                throw new IllegalArgumentException("Không tồn tại nào.");
            }
            category.setStatus(1);
            categoryRepository.save(category);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void destroy(Long id) {
        Category category = show(id);
        if (category != null) {
            categoryRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}
