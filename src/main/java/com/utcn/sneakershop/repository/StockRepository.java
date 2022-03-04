package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock,Long> {
}
