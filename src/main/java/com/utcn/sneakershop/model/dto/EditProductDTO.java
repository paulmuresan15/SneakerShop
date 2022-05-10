package com.utcn.sneakershop.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EditProductDTO {
    private Long id;
    private String name;
    private String category;
    private String brand;
    private MultipartFile encodedPhoto;

}
