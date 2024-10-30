package com.nguyensao.nguyensao_javaspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
