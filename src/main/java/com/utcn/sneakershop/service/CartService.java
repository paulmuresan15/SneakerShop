package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.CartProductDTO;
import com.utcn.sneakershop.model.dto.OrderProductDTO;
import com.utcn.sneakershop.model.dto.ProductDTO;
import com.utcn.sneakershop.model.entity.*;
import com.utcn.sneakershop.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final CartProductsRepository cartProductsRepository;
    private final StockRepository stockRepository;
    private final MailSenderService mailSenderService;
    private final StockService stockService;

    private final ProductService productService;

    @Autowired
    public CartService(CartRepository cartRepository, UserRepository userRepository, ProductRepository productRepository,
                       CartProductsRepository cartProductsRepository, StockRepository stockRepository, MailSenderService mailSenderService, StockService stockService, ProductService productService) {
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.cartProductsRepository = cartProductsRepository;
        this.stockRepository = stockRepository;

        this.mailSenderService = mailSenderService;
        this.stockService = stockService;
        this.productService = productService;
    }


    @Transactional
    public void addProductToCart(CartProductDTO cartProductDTO,Long userId){
        Optional<Stock> stockOptional = stockRepository.findStockByProductIdAndSize(cartProductDTO.getProductId(), cartProductDTO.getSize());
        if(stockOptional.isPresent()) {
            if (stockOptional.get().getQuantity() >= cartProductDTO.getQuantity()) {
                Optional<User> userOptional = userRepository.findById(userId);
                if (userOptional.isPresent()) {
                    Cart cartForUser = getCartForUser(userId);
                    Optional<Product> productOptional = productRepository.findById(cartProductDTO.getProductId());
                    if (productOptional.isPresent()) {
                        CartProduct cartProduct = new CartProduct(productOptional.get(), cartForUser,
                                cartProductDTO.getQuantity(), cartProductDTO.getSize());
                        cartProductsRepository.save(cartProduct);
                    }
                }
            }
        }
    }
    @Transactional
    public void removeProductFromCart(Long cartProductDTO) {
        Optional<CartProduct> cartProductOptional = cartProductsRepository.findById(cartProductDTO);
        if(cartProductOptional.isPresent()){
            CartProduct cartProduct = cartProductOptional.get();
            cartProductsRepository.delete(cartProduct);
        }
    }


    @Transactional
    public Integer getCartSizeByUserId(Long userId) {
        Cart cart = cartRepository.getCartByUserId(userId);
        if(cart!=null) {
            List<CartProduct> cartProductsByCartId = cartProductsRepository.getCartProductsByCartId(cart.getId());
            return cartProductsByCartId.size();
        } else {
            return 0;
        }
    }

    @Transactional
    public List<CartProductDTO> getCartProductsByUserId(Long userId){
        Cart cart = getCartForUser(userId);
        List<CartProduct> cartProductsByCartId = cartProductsRepository.getCartProductsByCartId(cart.getId());
        if(!cartProductsByCartId.isEmpty()) {
            List<CartProductDTO> cartProductDTOS = cartProductsByCartId.stream().map(CartProductDTO::new).collect(Collectors.toList());
            for(CartProductDTO cartProductDTO : cartProductDTOS){
                ProductDTO productDTO = productService.getProductById(cartProductDTO.getProductId());
                cartProductDTO.setPhotoUrl(productDTO.getPhotoUrl());
                cartProductDTO.setName(productDTO.getName());
            }
            return  cartProductDTOS;
        } else {
            return new ArrayList<>();
        }
    }

    private Cart getCartForUser(Long userId){
        Cart cartByUserId = cartRepository.getCartByUserId(userId);
        if(cartByUserId==null){
            createCartInstanceForUser(userId);
            cartByUserId=cartRepository.getCartByUserId(userId);
        }
        return cartByUserId;
    }

    private void createCartInstanceForUser(Long userId){
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            Cart newCart = new Cart(userOptional.get(),false);
            cartRepository.save(newCart);
        }
    }


    @Transactional
    public void orderProducts(Long userId) throws MessagingException, MalformedURLException, UnsupportedEncodingException {
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            List<CartProductDTO> cartProductsByUserId = getCartProductsByUserId(userId);
            Cart cartForUser = getCartForUser(userId);
            cartProductsByUserId.stream().forEach(cartProductDTO -> {
                try {
                    stockService.alterStock(cartProductDTO.getProductId(), cartProductDTO.getSize(), -cartProductDTO.getQuantity());
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
            cartForUser.setOrdered(true);
            List<OrderProductDTO> orderProductDTOS = new ArrayList<>();
            cartProductsByUserId.stream().forEach(cartProductDTO -> {
                OrderProductDTO orderProductDTO = new OrderProductDTO();
                ProductDTO productDTOById = productService.getProductById(cartProductDTO.getProductId());
                orderProductDTO.setProductName(productDTOById.getName());
                orderProductDTO.setSize(cartProductDTO.getSize());
                orderProductDTO.setQuantity(cartProductDTO.getQuantity());
                orderProductDTO.setProductPhoto(productRepository.findById(cartProductDTO.getProductId()).get().getPhotoUrl());
                orderProductDTOS.add(orderProductDTO);
            });
            sendOrderConfirmationEmailToUser(userOptional.get(),orderProductDTOS);
        }
    }

    private void sendOrderConfirmationEmailToUser(User user, List<OrderProductDTO> orderProductDTOS) throws MessagingException, MalformedURLException, UnsupportedEncodingException {
       mailSenderService.sendOrderConfirmationEmail(user,orderProductDTOS);
    }
}
