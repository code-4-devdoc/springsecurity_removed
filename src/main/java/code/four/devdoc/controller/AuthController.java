package code.four.devdoc.controller;

import code.four.devdoc.repository.UserRepository;
import code.four.devdoc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import code.four.devdoc.model.User;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        // 단순히 "Registered" 메시지를 반환하도록 변경
        return "Registered";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        // 단순히 "Logged in" 메시지를 반환하도록 변경
        return "Logged in";
    }
}


/*
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public boolean login(@RequestBody User loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return authentication.isAuthenticated();
    }

    @PostMapping("/register")
    public boolean register(@RequestBody User registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            return false;
        }
        registerRequest.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userService.saveUser(registerRequest);
        return true;
    }
}
*/