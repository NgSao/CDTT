package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductSale;

public interface ProductSaleRepository extends JpaRepository<ProductSale, Long> {
    List<ProductSale> findByStatus(Integer status);

    List<ProductSale> findByStatusIn(List<Integer> statusList);
}
