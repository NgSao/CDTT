package com.nguyensao.nguyensao_javaspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Token;

public interface TokenRepository extends JpaRepository<Token, Integer> {
}