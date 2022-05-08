package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.NewUserDTO;
import com.utcn.sneakershop.model.dto.UserDTO;
import com.utcn.sneakershop.model.entity.User;
import com.utcn.sneakershop.repository.RoleRepository;
import com.utcn.sneakershop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Transactional
    public void registerNewUser(NewUserDTO newUserDTO) {
        User newUser = new User();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        newUser.setEmail(newUserDTO.getEmail());
        newUser.setUsername(newUserDTO.getUsername());
        newUser.setPassword(passwordEncoder.encode(newUserDTO.getPassword()));
        newUser.setFirstName(newUserDTO.getFirstName());
        newUser.setLastName(newUserDTO.getLastName());
        newUser.setRole(roleRepository.findNormalUserRole());
        userRepository.save(newUser);
    }

    @Transactional
    public UserDTO getUserById(Long id) throws Exception {
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isPresent()){
            return new UserDTO(userOptional.get());
        }else{
            throw new Exception("User not found");
        }
    }
}
