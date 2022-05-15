package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.Brand;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
public class BrandDTO {

    private Long id;
    @NotBlank
    private String name;


    public BrandDTO(Brand brand) {
        this.id = brand.getId();
        this.name = brand.getName();
    }

    public BrandDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
