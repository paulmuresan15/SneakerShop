package com.utcn.sneakershop.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;


    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(name = "role_id")
    private Role role;

    public User(User user){
        this.id= user.getId();
        this.email=user.getEmail();
        this.password=user.getPassword();
        this.firstName=user.getFirstName();
        this.lastName=user.getLastName();
        this.role=user.getRole();
    }
}
