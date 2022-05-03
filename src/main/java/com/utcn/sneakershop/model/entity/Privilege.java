package com.utcn.sneakershop.model.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Privilege {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,unique = true)
    @Enumerated(EnumType.STRING)
    private PrivilegeName name;

    public enum PrivilegeName{
        NORMAL_USER,
        ADMIN;

        @Override
        public String toString() {
            return name();
        }
    }

}
