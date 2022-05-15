package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    @NotNull
    private Long id;
    @NotBlank
    private String email;
    @NotBlank

    private String username;
    @NotBlank

    private String firstName;
    @NotBlank

    private String lastName;

    private String role;

    public UserDTO(User user) {
        this.id=user.getId();
        this.email=user.getEmail();
        this.firstName=user.getFirstName();
        this.lastName=user.getLastName();
        this.role=user.getRole().getName().toString();
    }
}
