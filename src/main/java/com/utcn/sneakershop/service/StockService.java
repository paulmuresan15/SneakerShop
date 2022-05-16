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

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
            Stock stock = new Stock(productOptional.get(),stockDTO.getSize(),stockDTO.getQuantity(), stockDTO.getPrice(),stockDTO.isFeatured());
            stockRepository.save(stock);
        }
    }


    @Transactional
    public void alterStock(Long productId, String size, int quantity) throws Exception {
        if(quantity<0){
            removeStock(productId,size,quantity);
        }else{
            addStock(productId,size,quantity);
        }
    }
    private void removeStock(Long productId, String size, int quantity) throws Exception {
        Optional<Stock> stockOptional = stockRepository.findStockByProductIdAndSize(productId, size);
        if(stockOptional.isPresent()) {
            Stock stock = stockOptional.get();
            stock.setQuantity(stock.getQuantity() - Math.abs(quantity));
            if(stock.getQuantity() < 0){
                throw new Exception("Stock cannot be negative");
            }
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

    public Double getSmallestPriceForProduct(Long productId){
        List<StockDTO> stockDetailsForProductById = stockRepository.getStockDetailsForProductById(productId);
        Double smallestPrice= (double) 0;
        if(!stockDetailsForProductById.isEmpty()) {
            for (StockDTO stockDTO : stockDetailsForProductById) {
                if (stockDTO.getPrice() > smallestPrice) {
                    smallestPrice = stockDTO.getPrice();
                }
            }
        }
        return smallestPrice;
    }

    public List<StockDTO> getAllEntries(){
        List<Stock> stocks = stockRepository.findAll();
        List<StockDTO> stockDTOS = stocks.stream().map(StockDTO::new).collect(Collectors.toList());
        return stockDTOS;
    }

    @Transactional
    public void editStock(StockDTO stockDTO) {
        Optional<Stock> stockOptional = stockRepository.findById(stockDTO.getId());
        stockOptional.ifPresent(stock -> {
            if(!stock.getQuantity().equals(stockDTO.getQuantity())){
                stock.setQuantity(stockDTO.getQuantity());
            }
            if(!stock.getPrice().equals(stockDTO.getPrice())){
                stock.setPrice(stockDTO.getPrice());
            }
            if(!stock.getSize().equals(stockDTO.getSize())){
                stock.setSize(stockDTO.getSize());
            }
            if(stock.isFeatured() != stockDTO.isFeatured()){
                stock.setFeatured(stockDTO.isFeatured());
            }
            stockRepository.save(stock);
        });
    }
}
