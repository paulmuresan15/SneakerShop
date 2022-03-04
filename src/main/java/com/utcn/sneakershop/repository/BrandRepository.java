package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand,Long> {
}
