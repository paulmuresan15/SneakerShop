package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.dto.BrandDTO;
import com.utcn.sneakershop.model.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BrandRepository extends JpaRepository<Brand,Long> {
    @Query("select new com.utcn.sneakershop.model.entity.Brand(b.id, b.name)" +
            " from Brand b where b.name = :name")
    Optional<Brand> getByName(@Param("name") String name);
}
