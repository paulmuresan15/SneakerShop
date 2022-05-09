package com.utcn.sneakershop.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StockDTO {

    private Long productId;
    private String size;
    private Double price;
    private Integer quantity;
    private boolean isOnSale;


}
