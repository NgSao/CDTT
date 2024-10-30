package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductStoreDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductStore;

public interface ProductStoreService {
    List<ProductStore> index();

    List<ProductStore> trash();

    ProductStore show(Long id);

    ProductStore store(ProductStoreDTO productStoreDTO);

    ProductStore update(Long id, ProductStoreDTO productStoreDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);
}
