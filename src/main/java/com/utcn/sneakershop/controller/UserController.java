package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.UserDTO;
import com.utcn.sneakershop.service.RoleService;
import com.utcn.sneakershop.service.UserService;
import com.utcn.sneakershop.utils.AuthenticationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@Controller
@EnableMethodSecurity
@RequestMapping("/users")
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

    @GetMapping("/")
    public ResponseEntity<List<UserDTO>> getAllUsers(){
        try{
            List<UserDTO> users = userService.getAllUsers();
            return new ResponseEntity<>(users,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable("id") Long id) throws Exception {
        try {
            UserDTO user = userService.getUserById(id);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/edit")
    public ResponseEntity<HttpStatus> editUser(@RequestBody @Valid UserDTO userDTO){
        try{
            userService.editUser(userDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<HttpStatus> DeleteUserById(@PathVariable("id") Long id) throws Exception {
        try {
            userService.deleteUserById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }




}
