package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.dto.ProductDTO;
import com.utcn.sneakershop.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("select new com.utcn.sneakershop.model.dto.ProductDTO(p.id,p.name,p.category.name,p.brand.name)" +
            "from Product p left join Brand b on p.brand.id=b.id " +
            "left join Category c on p.category.id=c.id " +
            "left join Stock s on p.id=s.product.id " +
            "where s.quantity>0")
    List<ProductDTO> getAllAvailableProducts();

    @Query("select new com.utcn.sneakershop.model.dto.ProductDTO(p.id,p.name,p.category.name,p.brand.name,p.photoUrl)" +
            "from Product p left join Brand b on p.brand.id=b.id " +
            "left join Category c on p.category.id=c.id " +
            "left join Stock s on p.id=s.product.id " +
            "where s.quantity>0 and s.isFeatured=true " +
            "group by p.id")
    List<ProductDTO> getFeaturedProducts();

    @Query("select new com.utcn.sneakershop.model.dto.ProductDTO(p.id,p.name,p.category.name,p.brand.name,p.photoUrl)" +
            "from Product p left join Brand b on p.brand.id=b.id " +
            "left join Category c on p.category.id=c.id " +
            "left join Stock s on p.id=s.product.id " +
            "where s.quantity>0 " +
            "group by p.id")
    ProductDTO getProductDTOById(@Param("id") Long id);

    @Query("select new com.utcn.sneakershop.model.dto.ProductDTO(p.id,p.name,p.category.name,p.brand.name,p.photoUrl)" +
            "from Product p left join Brand b on p.brand.id=b.id " +
            "left join Category c on p.category.id=c.id " +
            "left join Stock s on p.id=s.product.id " +
            "where s.quantity>0 and c.name=:category " +
            "group by p.id")
    List<ProductDTO> getProductsByCategoryName(@Param("category") String categoryName);
}
