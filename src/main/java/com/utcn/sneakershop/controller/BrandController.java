package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.BrandDTO;
import com.utcn.sneakershop.service.BrandService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/brands")
public class BrandController {
    private final BrandService brandService;

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping
    public ResponseEntity<List<BrandDTO>> getAllBrands(){
        try{
            return new ResponseEntity<>(brandService.getAllBrands(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<BrandDTO> getBrandById(@PathVariable(name = "id") Long id){
        try{
            return new ResponseEntity<>(brandService.getBrandById(id),HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<HttpStatus> saveNewBrand(BrandDTO brandDTO){
        try{
            brandService.saveNewBrand(brandDTO);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteBrandById(@PathVariable(name = "id") Long id){
       try{
           brandService.deleteBrandById(id);
           return ResponseEntity.ok(HttpStatus.OK);
       } catch (Exception e){
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

//    @PostMapping("/edit")
//    public ResponseEntity<HttpStatus> editBrand(BrandDTO brandDTO){
//        try{
//            brandService.editBrand(brandDTO);
//        }
//    }
}
