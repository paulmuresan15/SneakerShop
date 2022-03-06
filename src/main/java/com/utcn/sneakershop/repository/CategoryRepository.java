package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.dto.CategoryDTO;
import com.utcn.sneakershop.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepository extends JpaRepository<Category,Long> {

    @Query("select new com.utcn.sneakershop.model.dto.CategoryDTO(c.id, c.name)" +
            " from Category c where c.name = :name")
    CategoryDTO getByName(@Param("name") String name);
}
