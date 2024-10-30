package com.nguyensao.nguyensao_javaspringboot.model;

import com.nguyensao.nguyensao_javaspringboot.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
    private UserDTO userDTO;
}
