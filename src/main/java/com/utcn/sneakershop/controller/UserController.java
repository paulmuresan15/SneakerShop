package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.NewUserDTO;
import com.utcn.sneakershop.model.dto.UserDTO;
import com.utcn.sneakershop.service.RoleService;
import com.utcn.sneakershop.service.UserService;
import com.utcn.sneakershop.utils.AuthenticationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    @PostMapping("/register")
    public ResponseEntity<HttpStatus> registerUser(@RequestBody NewUserDTO newUserDTO) {
        userService.registerNewUser(newUserDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/addRoles")
    public ResponseEntity<HttpStatus> addRoles() {
        try {
            roleService.addRoles();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getLoggedUser")
    public ResponseEntity<Object> getLoggedUser(@CurrentSecurityContext(expression="authentication")Authentication authentication){
        Object details = authentication.getDetails();
        return new ResponseEntity<>(details,HttpStatus.OK);
    }
}
