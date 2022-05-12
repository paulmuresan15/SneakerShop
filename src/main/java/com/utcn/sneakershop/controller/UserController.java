package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.UserDTO;
import com.utcn.sneakershop.service.RoleService;
import com.utcn.sneakershop.service.UserService;
import com.utcn.sneakershop.utils.AuthenticationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Controller
@EnableMethodSecurity
public class UserController {
    private final UserService userService;
    private final RoleService roleService;
    private final AuthenticationUtils authenticationUtils;

    @Autowired
    public UserController(UserService userService, RoleService roleService, AuthenticationUtils authenticationUtils) {
        this.userService = userService;
        this.roleService = roleService;
        this.authenticationUtils = authenticationUtils;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable("id") Long id) throws Exception {
        try {
            UserDTO user = userService.getUserById(id);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }




}
