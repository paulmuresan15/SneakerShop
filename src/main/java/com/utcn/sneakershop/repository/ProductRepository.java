package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
