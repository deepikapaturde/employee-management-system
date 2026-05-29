package com.deepika.authservice.security;
import com.deepika.authservice.dto.*;

public interface AuthService {

    String register(RegisterRequestDTO dto);

    String login(LoginRequestDTO dto);
}