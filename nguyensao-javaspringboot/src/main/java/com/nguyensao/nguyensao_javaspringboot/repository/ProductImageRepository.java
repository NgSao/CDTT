package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.ProductImage;
import com.nguyensao.nguyensao_javaspringboot.entity.Product;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
    List<ProductImage> findByProduct(Product product);

}
