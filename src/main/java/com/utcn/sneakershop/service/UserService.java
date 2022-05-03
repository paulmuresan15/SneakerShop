package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.NewUserDTO;
import com.utcn.sneakershop.model.entity.User;
import com.utcn.sneakershop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void registerNewUser(NewUserDTO newUserDTO) {
        User newUser = new User();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        newUser.setEmail(newUserDTO.getEmail());
        newUser.setUsername(newUserDTO.getUsername());
        newUser.setPassword(passwordEncoder.encode(newUserDTO.getPassword()));
        newUser.setRole();
    }
}
