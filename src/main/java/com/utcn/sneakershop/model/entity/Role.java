package com.utcn.sneakershop.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "roles")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private RoleName name;
    @OneToMany(
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL
    )
    @JoinTable(
            name="role_privilege",
            joinColumns = @JoinColumn( name="role_id"),
            inverseJoinColumns = @JoinColumn( name="privilege_id")
    )
    private Set<Privilege> privileges;

    public Role(){

    }
    public Role(RoleName roleName, Set<Privilege> privileges) {
        this.name=roleName;
        this.privileges=privileges;
    }

    public Role(Long id,
                RoleName name) {
        this.name = name;
    }

    public enum RoleName{
        ROLE_NORMAL_USER,
        ROLE_ADMIN;
    }
}
