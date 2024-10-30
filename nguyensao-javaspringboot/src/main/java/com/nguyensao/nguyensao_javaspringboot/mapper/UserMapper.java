package com.nguyensao.nguyensao_javaspringboot.mapper;

import com.nguyensao.nguyensao_javaspringboot.dto.UserDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.User;

public class UserMapper {
    public static UserDTO mapToUserDto(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPhone(user.getPhone());
        userDTO.setAddress(user.getAddress());
        userDTO.setRole(user.getRole());
        return userDTO;
    }
}
