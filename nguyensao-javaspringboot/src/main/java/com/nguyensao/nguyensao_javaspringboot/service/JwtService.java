package com.nguyensao.nguyensao_javaspringboot.service;

import com.nguyensao.nguyensao_javaspringboot.entity.User;

public interface JwtService {
    String extractUsername(String token);

    String generateToken(User user);
}