package com.utcn.sneakershop.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderProductDTO {

    private String productName;

    private String productPhoto;

    private int quantity;

    private String size;
}
