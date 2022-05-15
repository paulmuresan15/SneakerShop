package com.utcn.sneakershop.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "stock")
@Data
@NoArgsConstructor
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "size")
    private String size;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "price")
    private Double price;

    @Column(name = "is_featured")
    private boolean isFeatured;

    public Stock(Product product, String size, Integer quantity, Double price) {
        this.product = product;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
    }
}
