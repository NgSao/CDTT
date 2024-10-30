package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductSaleDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductSale;

public interface ProductSaleService {
    List<ProductSale> index();

    List<ProductSale> trash();

    ProductSale show(Long id);

    ProductSale store(ProductSaleDTO productSaleDTO);

    ProductSale update(Long id, ProductSaleDTO productSaleDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);
}
