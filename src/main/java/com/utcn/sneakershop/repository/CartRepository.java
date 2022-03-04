package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
