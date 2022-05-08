package com.utcn.sneakershop.controller;

import com.utcn.sneakershop.model.dto.CartProductDTO;
import com.utcn.sneakershop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/add/{userId}")
    public ResponseEntity<HttpStatus> addProductToCart(CartProductDTO cartProductDTO, @Param("userId") Long userId){
        try{
            cartService.addProductToCart(cartProductDTO,userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/remove")
    public ResponseEntity<HttpStatus> removeProductFromCart(Long cartProductId){
        try{
            cartService.removeProductFromCart(cartProductId);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<List<CartProductDTO>> getCartProductsByUserId(@Param("id") Long userId){
        try {
            List<CartProductDTO> cartProductsByUserId = cartService.getCartProductsByUserId(userId);
            return new ResponseEntity<>(cartProductsByUserId,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/size/{userId}")
    public ResponseEntity<Integer> getCartSizeByUserId(@PathVariable("userId") Long userId){
        try{
            Integer cartSize = cartService.getCartSizeByUserId(userId);
            return new ResponseEntity<>(cartSize,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/order/{userId}")
    public ResponseEntity<HttpStatus> orderProducts(@PathVariable("userId") Long userId){
        try{
            cartService.orderProducts(userId);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
