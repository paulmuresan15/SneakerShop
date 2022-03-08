package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.Brand;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BrandDTO {

    private Long id;
    private String name;
    private String logoUrl;
    private String description;
    private String encodedAvatar;

    public BrandDTO(Brand brand) {
        this.id = brand.getId();
        this.name = brand.getName();
        this.logoUrl = brand.getLogoUrl();
        this.description = brand.getDescription();
    }
}
