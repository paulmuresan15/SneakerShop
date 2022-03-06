package com.utcn.sneakershop.model.entity;

import com.utcn.sneakershop.model.dto.CategoryDTO;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "category")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    public Category(CategoryDTO categoryDTO){
        this.name= categoryDTO.getName();
    }


    public Category() {

    }
}
