package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.entity.User;

public interface UserService {
    User createUser(User user);

    List<User> getUsers();

    User getUserById(Long id);

    User updateUser(Long id, User user);
}
