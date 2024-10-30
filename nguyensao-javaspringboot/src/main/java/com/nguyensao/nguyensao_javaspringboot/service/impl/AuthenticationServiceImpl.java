package com.nguyensao.nguyensao_javaspringboot.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.UserDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Token;
import com.nguyensao.nguyensao_javaspringboot.entity.User;
import com.nguyensao.nguyensao_javaspringboot.enums.Role;
import com.nguyensao.nguyensao_javaspringboot.mapper.UserMapper;
import com.nguyensao.nguyensao_javaspringboot.model.AuthenticationRequest;
import com.nguyensao.nguyensao_javaspringboot.model.AuthenticationResponse;
import com.nguyensao.nguyensao_javaspringboot.model.RegisterRequest;
import com.nguyensao.nguyensao_javaspringboot.repository.TokenRepository;
import com.nguyensao.nguyensao_javaspringboot.repository.UserRepository;
import com.nguyensao.nguyensao_javaspringboot.service.AuthenticationService;

import java.time.LocalDateTime;
import java.util.Arrays;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

        private final UserRepository userRepository;
        private final TokenRepository tokenRepository;
        private final JwtServiceImpl jwtService;
        private final AuthenticationManager authenticationManager;
        private final PasswordEncoder passwordEncoder;

        @Override
        public AuthenticationResponse register(RegisterRequest request) {
                User newUser = new User();
                newUser.setUsername(request.getUsername());
                newUser.setPassword(passwordEncoder.encode(request.getPassword()));
                newUser.setName(request.getName());
                // Xử lý vai trò
                if (!isValidRole(request.getRole())) {
                        throw new IllegalArgumentException("Invalid role");
                }

                Role userRole = Role.valueOf(request.getRole());
                newUser.setRole(userRole);
                newUser.setCreatedAt(LocalDateTime.now());
                newUser.setCreatedBy(1);
                newUser.setStatus(1);

                User createdUser = userRepository.save(newUser);
                String jwtToken = jwtService.generateToken(createdUser);
                Token token = Token.builder()
                                .userId(createdUser.getId())
                                .token(jwtToken)
                                .expired(false)
                                .revoked(false)
                                .build();
                tokenRepository.save(token);

                return AuthenticationResponse.builder()
                                .userDTO(UserMapper.mapToUserDto(createdUser))
                                .token(jwtToken)
                                .build();
        }

        public AuthenticationResponse login(AuthenticationRequest request) {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(
                                                request.getUsername(),
                                                request.getPassword()));
                User user = userRepository.findByUsername(request.getUsername())
                                .orElseThrow();
                var jwtToken = jwtService.generateToken(user);
                Token token = Token.builder()
                                .userId(user.getId())
                                .token(jwtToken)
                                .expired(false)
                                .revoked(false)
                                .build();
                tokenRepository.save(token);
                UserDTO userDTO = UserMapper.mapToUserDto(user);
                return AuthenticationResponse.builder()
                                .userDTO(userDTO)
                                .token(jwtToken)
                                .build();
        }

        private boolean isValidRole(String role) {
                return Arrays.stream(Role.values()).anyMatch(r -> r.name().equalsIgnoreCase(role));
        }
}
