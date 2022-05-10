package com.utcn.sneakershop.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StockDTO {

    private Long productId;
    private String size;
    private Double price;
    private Integer quantity;
    private boolean isOnSale;

    public StockDTO(String size, Double price, Integer quantity, boolean isOnSale) {
        this.size = size;
        this.price = price;
        this.quantity = quantity;
        this.isOnSale = isOnSale;
    }
}
