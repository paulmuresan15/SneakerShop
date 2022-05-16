package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.ProductDTO;
import com.utcn.sneakershop.service.ProductService;
import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.imageio.ImageIO;
import javax.validation.Valid;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.Base64;
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
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        try {
            return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/available")
    public ResponseEntity<List<ProductDTO>> getAllAvailableProducts() {
        try {
            return new ResponseEntity<>(productService.getAllAvailableProducts(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sport")
    public ResponseEntity<List<ProductDTO>> getAllSportProducts(){
        try{
            List<ProductDTO> sportProducts = productService.getProductsByCategoryName("Sport");
            return new ResponseEntity<>(sportProducts,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/casual")
    public ResponseEntity<List<ProductDTO>> getAllCasualProducts(){
        try{
            List<ProductDTO> sportProducts = productService.getProductsByCategoryName("Casual");
            return new ResponseEntity<>(sportProducts,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/elegant")
    public ResponseEntity<List<ProductDTO>> getAllElegantProducts(){
        try{
            List<ProductDTO> sportProducts = productService.getProductsByCategoryName("Elegant");
            return new ResponseEntity<>(sportProducts,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/featured")
    public ResponseEntity<List<ProductDTO>> getFeaturedProducts() {

            return new ResponseEntity<>(productService.getFeaturedProducts(), HttpStatus.OK);

    }

    @PostMapping( value = "/add",consumes = "multipart/form-data")
    @RolesAllowed("ROLE_ADMIN")
    public ResponseEntity<HttpStatus> addNewProduct(@Valid ProductDTO productDTO) {
        try {
            productService.addNewProduct(productDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping(value = "/edit", consumes ="multipart/form-data")
    @RolesAllowed("ROLE_ADMIN")
    public ResponseEntity<HttpStatus> editProduct(@Valid ProductDTO productDTO) {
        try {
            productService.editProduct(productDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<HttpStatus> deleteProductById(@RequestParam Long id){
        try{
            productService.deleteProductById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/photo")
    public @ResponseBody ResponseEntity<String> getImageWithMediaType(@RequestParam(required = false) String path) throws IOException {
//        File file = new File("D:\\JavaProjects\\ShopPhotos\\Brands\\1.png");
        try {
            File file = new File(path);
            BufferedImage read = ImageIO.read(file);
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            ImageIO.write(read, "png", outputStream);
            String encoded = Base64.getEncoder().encodeToString(outputStream.toByteArray());


            return ResponseEntity
                    .ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(encoded);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
