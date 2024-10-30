package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.BrandDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Brand;

public interface BrandService {
    List<Brand> index();

    List<Brand> trash();

    Brand show(Long id);

    Brand store(BrandDTO brandDTO);

    Brand update(Long id, BrandDTO brandDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);

}
