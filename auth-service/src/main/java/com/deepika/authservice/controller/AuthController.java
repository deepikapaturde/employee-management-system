package com.deepika.authservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deepika.authservice.dto.AuthResponseDTO;
import com.deepika.authservice.dto.LoginRequestDTO;
import com.deepika.authservice.dto.RegisterRequestDTO;
import com.deepika.authservice.security.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // REGISTER
    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequestDTO dto) {

        return authService.register(dto);
    }

    // LOGIN
    @PostMapping("/login")
    public AuthResponseDTO login(
            @RequestBody LoginRequestDTO dto) {

        String token = authService.login(dto);

        return new AuthResponseDTO(token);
    }
}
