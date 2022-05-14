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

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream().map(UserDTO::new).collect(Collectors.toList());
    }

    @Transactional
    public void deleteUserById(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        userOptional.ifPresent(userRepository::delete);
    }

    @Transactional
    public void editUser(UserDTO userDTO) {
        Optional<User> userOptional = userRepository.findById(userDTO.getId());
        userOptional.ifPresent(user -> {
            if(!Objects.equals(user.getFirstName(), userDTO.getFirstName())){
                user.setFirstName(userDTO.getFirstName());
            }
            if(!Objects.equals(user.getLastName(), userDTO.getLastName())){
                user.setLastName(userDTO.getLastName());
            }
            if(!Objects.equals(user.getEmail(), userDTO.getEmail())){
                user.setEmail(userDTO.getEmail());
            }
            userRepository.save(user);
        });
    }
}
