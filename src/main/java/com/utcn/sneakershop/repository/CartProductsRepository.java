package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartProductsRepository extends JpaRepository<CartProduct, Long> {
}
