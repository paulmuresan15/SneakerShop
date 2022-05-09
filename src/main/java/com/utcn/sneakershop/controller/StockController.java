package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.StockDTO;
import com.utcn.sneakershop.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/stock")
public class StockController {
    private final StockService stockService;

    @Autowired
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @PostMapping("/add")
    public ResponseEntity<HttpStatus> addStockToProduct(StockDTO stockDTO){
       stockService.addStock(stockDTO);
       return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<HttpStatus> removeStockOfProduct(StockDTO stockDTO){
        stockService.deleteStock(stockDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
