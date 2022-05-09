package com.utcn.sneakershop.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
public class ProductDTO {

    private Long id;
    private String name;
    private String category;
    private String brand;

    private String photoUrl;
    private List<StockDTO> stockDTOS;

    public ProductDTO(Long id, String name, String category, String brand) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.brand = brand;
    }


    public ProductDTO(Long id, String name, String category, String brand, String photoUrl) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.photoUrl = photoUrl;
    }
}
