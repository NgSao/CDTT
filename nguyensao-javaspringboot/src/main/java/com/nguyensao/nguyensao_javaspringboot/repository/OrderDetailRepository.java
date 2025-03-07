package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    List<OrderDetail> findByOrderId(Long orderId);

}
