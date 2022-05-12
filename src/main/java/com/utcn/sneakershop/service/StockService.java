package com.utcn.sneakershop.service;
import com.utcn.sneakershop.model.dto.StockDTO;
import com.utcn.sneakershop.model.entity.Product;
import com.utcn.sneakershop.model.entity.Stock;
import com.utcn.sneakershop.repository.ProductRepository;
import com.utcn.sneakershop.repository.StockRepository;
import com.utcn.sneakershop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class StockService {
    private final StockRepository stockRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Autowired
    public StockService(StockRepository stockRepository, ProductRepository productRepository,
                        UserRepository userRepository) {
        this.stockRepository = stockRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public void addStock(StockDTO stockDTO){
        Optional<Product> productOptional = productRepository.findById(stockDTO.getProductId());
        if(productOptional.isPresent()){
            Stock stock = new Stock(productOptional.get(),stockDTO.getSize(),stockDTO.getQuantity(), stockDTO.getPrice());
            stockRepository.save(stock);
        }
    }


    @Transactional
    public void alterStock(Long productId, String size, int quantity){
        if(quantity<0){
            removeStock(productId,size,quantity);
        }else{
            addStock(productId,size,quantity);
        }
    }
    private void removeStock(Long productId, String size, int quantity){
        Optional<Stock> stockOptional = stockRepository.findStockByProductIdAndSize(productId, size);
        if(stockOptional.isPresent()) {
            Stock stock = stockOptional.get();
            stock.setQuantity(stock.getQuantity() - Math.abs(quantity));
            stockRepository.save(stock);
        }
    }

    private void addStock(Long productId, String size, int quantity){
        Optional<Stock> stockOptional = stockRepository.findStockByProductIdAndSize(productId, size);
        if(stockOptional.isPresent()) {
            Stock stock = stockOptional.get();
            stock.setQuantity(stock.getQuantity() + quantity);
            stockRepository.save(stock);
        }
    }

    @Transactional
    public void deleteStock(Long productId,String size) {
        Optional<Stock> stockOptional = stockRepository.findStockByProductIdAndSize(productId, size);
        stockOptional.ifPresent(stockRepository::delete);
    }
}
