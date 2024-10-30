package com.nguyensao.nguyensao_javaspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Cart;
import com.nguyensao.nguyensao_javaspringboot.entity.CartDetail;
import org.springframework.transaction.annotation.Transactional;

public interface CartDetailRepository extends JpaRepository<CartDetail, Long> {

    @Transactional
    void deleteAllByCart(Cart cart);
}