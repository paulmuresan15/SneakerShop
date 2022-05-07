package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.ProductDTO;
import com.utcn.sneakershop.model.dto.StockDTO;
import com.utcn.sneakershop.model.entity.Brand;
import com.utcn.sneakershop.model.entity.Category;
import com.utcn.sneakershop.model.entity.Product;
import com.utcn.sneakershop.repository.BrandRepository;
import com.utcn.sneakershop.repository.CategoryRepository;
import com.utcn.sneakershop.repository.ProductRepository;
import com.utcn.sneakershop.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.security.RolesAllowed;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final StockRepository stockRepository;

    @Autowired
    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository,
                          BrandRepository brandRepository, StockRepository stockRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.brandRepository = brandRepository;
        this.stockRepository = stockRepository;
    }

    @Transactional
    public List<ProductDTO> getAllAvailableProducts() {
        return productRepository.getAllAvailableProducts();
    }

    @Transactional
    @RolesAllowed("ROLE_ADMIN")
    public void addNewProduct(ProductDTO productDTO) throws Exception {
        Optional<Category> categoryOptional = categoryRepository.getByName(productDTO.getCategory());
        Optional<Brand> brandOptional = brandRepository.getByName(productDTO.getBrand());
        if (categoryOptional.isPresent() && brandOptional.isPresent()) {
            Product newProduct = new Product(categoryOptional.get(), brandOptional.get(), productDTO.getName());
            productRepository.save(newProduct);
        } else {
            throw new Exception("Category or brand do not exist!");
        }
    }

    @Transactional
    public ProductDTO getProductById(Long id){
        ProductDTO product = productRepository.getProductById(id);
        List<StockDTO> stockDetailsForProduct = stockRepository.getStockDetailsForProductById(id);
        product.setStockDTOS(stockDetailsForProduct);
        return product;
    }
}
