package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Banner;

public interface BannerRepository extends JpaRepository<Banner, Long> {
    List<Banner> findByStatus(Integer status);

    List<Banner> findByStatusIn(List<Integer> statusList);

}
