package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.Stock;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StockDTO {

    private Long id;
    private Long productId;

    private String productName;
    private String size;
    private Double price;
    private Integer quantity;
    private boolean isFeatured;

    public StockDTO(String size, Double price, Integer quantity, boolean isFeatured) {
        this.size = size;
        this.price = price;
        this.quantity = quantity;
        this.isFeatured = isFeatured;
    }

    public StockDTO(Stock stock){
        this.id=stock.getId();
        this.productId=stock.getProduct().getId();
        this.productName=stock.getProduct().getName();
        this.size=stock.getSize();
        this.price=stock.getPrice();
        this.quantity=stock.getQuantity();
        this.isFeatured = stock.isFeatured();
    }
}
