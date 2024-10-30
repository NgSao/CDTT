package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.CategoryDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Category;

public interface CategoryService {
    List<Category> index();

    List<Category> trash();

    Category show(Long id);

    Category store(CategoryDTO categoryDTO);

    Category update(Long id, CategoryDTO categoryDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);
}
