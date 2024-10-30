package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    List<Menu> findByStatus(Integer status);

    List<Menu> findByStatusIn(List<Integer> statusList);

}
