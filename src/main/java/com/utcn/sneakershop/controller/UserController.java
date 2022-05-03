package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.NewUserDTO;
import com.utcn.sneakershop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<HttpStatus> registerUser(NewUserDTO newUserDTO){
        try {
            userService.registerNewUser(newUserDTO);
        }catch (Exception e){

        }
        return null;
    }
}
