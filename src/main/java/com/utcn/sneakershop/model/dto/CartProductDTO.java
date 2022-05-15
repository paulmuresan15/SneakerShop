package com.utcn.sneakershop.model.dto;

import com.utcn.sneakershop.model.entity.CartProduct;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartProductDTO {

    private Long id;

    private Long productId;

    private String name;

    private Long cartId;

    private int quantity;

    private String photoUrl;

    private String size;

    public CartProductDTO(CartProduct cartProduct) {
        this.id= cartProduct.getId();
        this.productId=cartProduct.getProduct().getId();
        this.cartId=cartProduct.getCart().getId();
        this.quantity=cartProduct.getQuantity();
        this.size=cartProduct.getSize();
    }
}
