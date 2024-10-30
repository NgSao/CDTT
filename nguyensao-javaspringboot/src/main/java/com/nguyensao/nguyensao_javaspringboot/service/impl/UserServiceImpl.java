package com.nguyensao.nguyensao_javaspringboot.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.entity.User;
import com.nguyensao.nguyensao_javaspringboot.repository.UserRepository;
import com.nguyensao.nguyensao_javaspringboot.service.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User updateUser(Long id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setUsername(user.getUsername());
            // existingUser.setPassword(user.getPassword());
            existingUser.setName(user.getName());
            existingUser.setPhone(user.getPhone());
            existingUser.setEmail(user.getEmail());
            existingUser.setGender(user.getGender());
            existingUser.setAddress(user.getAddress());

            return userRepository.save(existingUser);
        }
        return null;
    }
}