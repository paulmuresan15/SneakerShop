package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
