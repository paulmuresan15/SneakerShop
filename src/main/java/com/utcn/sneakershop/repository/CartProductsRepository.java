package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartProductsRepository extends JpaRepository<CartProduct, Long> {
    @Query("select cp from CartProduct cp left join Cart c on cp.cart.id=c.id " +
            "where c.id = :cartId")
    List<CartProduct> getCartProductsByCartId(Long cartId);
}
