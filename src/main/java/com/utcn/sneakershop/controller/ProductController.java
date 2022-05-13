package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.EditProductDTO;
import com.utcn.sneakershop.model.dto.ProductDTO;
import com.utcn.sneakershop.model.entity.Product;
import com.utcn.sneakershop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@Controller
@RequestMapping("/products")
@EnableMethodSecurity
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public ResponseEntity<List<ProductDTO>> getAllAvailableProducts(){
        try {
            return new ResponseEntity<>(productService.getAllAvailableProducts(), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sale")
    public ResponseEntity<List<ProductDTO>> getProductsOnSale(){
        try{
            return new ResponseEntity<>(productService.getProductsOnSale(),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add")
    @RolesAllowed("ROLE_ADMIN")
    public ResponseEntity<HttpStatus> addNewProduct(@RequestBody ProductDTO productDTO){
        try{
            productService.addNewProduct(productDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping(value = "/edit",consumes = "multipart/form-data")
    @RolesAllowed("ROLE_ADMIN")
    public ResponseEntity<HttpStatus> editProduct(ProductDTO productDTO){
        try{
            productService.editProduct(productDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
