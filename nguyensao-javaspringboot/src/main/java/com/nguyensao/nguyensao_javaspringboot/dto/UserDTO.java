package com.nguyensao.nguyensao_javaspringboot.dto;

import com.nguyensao.nguyensao_javaspringboot.enums.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String gender;
    private String username;
    @Enumerated(EnumType.STRING)
    private Role role;
}
