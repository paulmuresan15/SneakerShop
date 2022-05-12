package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.Category;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CategoryDTO {

    private Long id;
    @NotBlank
    private String name;

    public CategoryDTO() {
    }

    public CategoryDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public CategoryDTO(Category category){
        this.id= category.getId();
        this.name= category.getName();
    }
}
