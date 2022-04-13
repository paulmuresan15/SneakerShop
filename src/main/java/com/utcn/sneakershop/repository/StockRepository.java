package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.dto.StockDTO;
import com.utcn.sneakershop.model.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock,Long> {
    @Query("select new com.utcn.sneakershop.model.dto.StockDTO(s.size,s.price,s.quantity,s.isOnSale) " +
            "from Stock s where s.product.id = :id")
    List<StockDTO> getStockDetailsForProductById(@Param("id") Long id);
}
