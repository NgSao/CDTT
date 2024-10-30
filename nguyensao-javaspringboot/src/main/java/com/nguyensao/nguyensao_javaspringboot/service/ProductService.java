package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Product;

public interface ProductService {
    List<Product> index();

    List<Product> trash();

    Product show(Long id);

    Product store(ProductDTO productDTO);

    Product update(Long id, ProductDTO productDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);
}
