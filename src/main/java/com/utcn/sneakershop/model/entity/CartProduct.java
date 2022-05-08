package com.utcn.sneakershop.model.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "cart_products")
@Data
public class CartProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "size")
    private String size;


    public CartProduct(Product product, Cart cart, int quantity, String size) {
        this.product = product;
        this.cart = cart;
        this.quantity = quantity;
        this.size = size;
    }
}
