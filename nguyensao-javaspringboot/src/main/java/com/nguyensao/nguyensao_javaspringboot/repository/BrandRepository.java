package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long> {
    List<Brand> findByStatus(Integer status);

    List<Brand> findByStatusIn(List<Integer> statusList);

}
