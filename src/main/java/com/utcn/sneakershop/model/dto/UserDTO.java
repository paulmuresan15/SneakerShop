package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String email;
    private String username;
    private String firstName;
    private String lastName;

    public UserDTO(User user) {
        this.id=user.getId();
        this.email=user.getEmail();
        this.firstName=user.getFirstName();
        this.lastName=user.getLastName();
    }
}
