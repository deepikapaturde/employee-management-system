package com.deepika.authservice.service.impl;

import com.deepika.authservice.dto.*;

import com.deepika.authservice.entity.User;
import com.deepika.authservice.repository.UserRepository;
import com.deepika.authservice.security.AuthService;
import com.deepika.authservice.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public String register(RegisterRequestDTO dto) {

        User user = new User();

        user.setName(dto.getName());
        user.setEmail(dto.getEmail());

        // ENCRYPT PASSWORD
        user.setPassword(
                passwordEncoder.encode(dto.getPassword()));

        user.setRole(dto.getRole());

        userRepository.save(user);

        return "User registered successfully";
    }

    @Override
    public String login(LoginRequestDTO dto) {

        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid email"));

        boolean matches = passwordEncoder.matches(
                dto.getPassword(),
                user.getPassword());

        if (!matches) {

            throw new RuntimeException(
                    "Invalid password");
        }

        return jwtUtil.generateToken(user.getEmail());
    }
}