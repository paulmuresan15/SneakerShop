package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.Product;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.List;

@NoArgsConstructor
@Data
public class ProductDTO {

    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String category;
    @NotBlank
    private String brand;

    private String photoUrl;
    private MultipartFile encodedPhoto;
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

    public ProductDTO(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.category = product.getCategory().getName();
        this.brand = product.getBrand().getName();
        this.photoUrl = product.getPhotoUrl();
    }
}
