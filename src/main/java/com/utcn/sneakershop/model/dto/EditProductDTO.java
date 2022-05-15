package com.utcn.sneakershop.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EditProductDTO {

    @NotNull
    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String category;
    @NotBlank
    private String brand;
    private MultipartFile encodedPhoto;

}
