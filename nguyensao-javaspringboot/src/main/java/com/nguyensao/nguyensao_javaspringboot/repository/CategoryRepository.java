package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findByStatus(Integer status);

    List<Category> findByStatusIn(List<Integer> statusList);
}
