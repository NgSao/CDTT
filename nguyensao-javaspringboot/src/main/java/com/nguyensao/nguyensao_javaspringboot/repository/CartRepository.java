package com.nguyensao.nguyensao_javaspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

}
