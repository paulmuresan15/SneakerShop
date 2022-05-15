package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.StockDTO;
import com.utcn.sneakershop.model.entity.Stock;
import com.utcn.sneakershop.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/stock")
public class StockController {
    private final StockService stockService;

    @Autowired
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping("/")
    public ResponseEntity<List<StockDTO>> getAllEntries(){
        List<StockDTO> stockDTOS = stockService.getAllEntries();
        return new ResponseEntity<>(stockDTOS,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HttpStatus> addStockToProduct(@RequestBody StockDTO stockDTO){
       stockService.addStock(stockDTO);
       return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/edit")
    public ResponseEntity<HttpStatus> editStockEntry(@RequestBody StockDTO stockDTO){
        stockService.editStock(stockDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}/{size}")
    public ResponseEntity<HttpStatus> removeStockOfProduct(@PathVariable("id") Long productId, @PathVariable("size") String size){
        stockService.deleteStock(productId,size);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{productId}/price")
    public ResponseEntity<Double> getSmallestPriceForProduct(@PathVariable("productId") Long productId){
        try {
            Double smallestPriceForProduct = stockService.getSmallestPriceForProduct(productId);
            return new ResponseEntity<>(smallestPriceForProduct,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
