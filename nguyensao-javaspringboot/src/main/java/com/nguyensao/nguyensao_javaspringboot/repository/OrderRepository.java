package com.nguyensao.nguyensao_javaspringboot.repository;

import com.nguyensao.nguyensao_javaspringboot.entity.Order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByStatus(Integer status);

    List<Order> findByStatusIn(List<Integer> statusList);
}
