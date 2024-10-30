package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByStatus(Integer status);

    List<Product> findByStatusIn(List<Integer> statusList);
}
