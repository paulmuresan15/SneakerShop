package com.utcn.sneakershop.security;

import com.utcn.sneakershop.model.entity.Privilege;
import com.utcn.sneakershop.model.entity.Role;
import com.utcn.sneakershop.model.entity.User;
import com.utcn.sneakershop.repository.RoleRepository;
import com.utcn.sneakershop.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public CustomUserDetailsService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findByUsername(username);
        if (userOptional.isPresent()) {
            Set<Role> rolesForUser = roleRepository.findRolesForUser(userOptional.get().getId());

            Set<GrantedAuthority> grantedAuthorities = getGrantedAuthorities(rolesForUser);
            return new CustomUserDetails(userOptional.get(), grantedAuthorities);
        } else {
            throw new UsernameNotFoundException("Unknown user");
        }
    }


    private Set<GrantedAuthority> getGrantedAuthorities(Set<Role> roles) {
        return roles.stream().map(role -> role.getPrivileges().stream()
                .map(Privilege::getName)
                .map(Enum::toString)
                .map(privilege -> "ROLE_" + privilege)
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList())).flatMap(List::stream).collect(Collectors.toSet());
    }
}
