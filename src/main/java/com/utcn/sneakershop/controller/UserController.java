package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.NewUserDTO;
import com.utcn.sneakershop.service.RoleService;
import com.utcn.sneakershop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@EnableMethodSecurity
public class UserController {
    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public UserController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @PostMapping("/register")
    public ResponseEntity<HttpStatus> registerUser(NewUserDTO newUserDTO){

            userService.registerNewUser(newUserDTO);
            return new ResponseEntity<>(HttpStatus.OK);

    }

    @PostMapping("/addRoles")
    public ResponseEntity<HttpStatus> addRoles(){
        try{
            roleService.addRoles();
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
