package com.nguyensao.nguyensao_javaspringboot.service;

import com.nguyensao.nguyensao_javaspringboot.model.AuthenticationRequest;
import com.nguyensao.nguyensao_javaspringboot.model.AuthenticationResponse;
import com.nguyensao.nguyensao_javaspringboot.model.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse login(AuthenticationRequest request);
}