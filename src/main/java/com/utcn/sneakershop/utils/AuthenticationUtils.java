package com.utcn.sneakershop.utils;

import com.utcn.sneakershop.model.dto.UserDTO;
import com.utcn.sneakershop.model.entity.User;
import com.utcn.sneakershop.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationUtils {

    private final UserRepository userRepository;

    public AuthenticationUtils(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    public UserDTO getLoggedUser(){
//        User loggedUserEntity = getLoggedUserEntity();
//        if(loggedUserEntity != null){
//            return new UserDTO(loggedUserEntity);
//        }
//        return new UserDTO();
//    }
//
//    private User getLoggedUserEntity() {
//       return Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
//                .map(Authentication::getPrincipal)
//                .map(principle -> (UserDetails) principle)
//                .map(UserDetails::getUsername)
//                .map(userRepository::findByUsername)
//                .flatMap(user -> user)
//                .orElse(null);
//    }
}
