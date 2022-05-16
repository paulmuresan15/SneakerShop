package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.ProductDTO;
import com.utcn.sneakershop.model.entity.Brand;
import com.utcn.sneakershop.model.entity.Category;
import com.utcn.sneakershop.model.entity.Product;
import com.utcn.sneakershop.repository.BrandRepository;
import com.utcn.sneakershop.repository.CategoryRepository;
import com.utcn.sneakershop.repository.ProductRepository;
import com.utcn.sneakershop.repository.StockRepository;
import com.utcn.sneakershop.utils.PhotoUtils;
import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.transaction.Transactional;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final StockRepository stockRepository;
    private final PhotoUtils photoUtils;

    @Value("${file.image.extension}")
    private String IMAGE_EXTENSION;

    @Value("${file.storage.path.products}")
    private String LOGO_STORAGE_PATH;

    @Value("${file.image.width.products}")
    private String TARGET_WIDTH_PRODUCTS;

    @Value("${file.image.height.products}")
    private String TARGET_HEIGHT_PRODUCTS;


    @Autowired
    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository,
                          BrandRepository brandRepository, StockRepository stockRepository, PhotoUtils photoUtils) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.brandRepository = brandRepository;
        this.stockRepository = stockRepository;
        this.photoUtils = photoUtils;
    }

    @Transactional
    public List<ProductDTO> getAllAvailableProducts() {
        List<ProductDTO> allAvailableProducts = productRepository.getAllAvailableProducts();
        allAvailableProducts.stream().forEach(productDTO -> productDTO.setStockDTOS(stockRepository.getStockDetailsForProductById(productDTO.getId())));
        return allAvailableProducts;
    }

    @Transactional
    public void addNewProduct(ProductDTO productDTO) throws Exception {
        Optional<Category> categoryOptional = categoryRepository.getByName(productDTO.getCategory());
        Optional<Brand> brandOptional = brandRepository.getByName(productDTO.getBrand());
        if (categoryOptional.isPresent() && brandOptional.isPresent()) {
            Product newProduct = new Product(categoryOptional.get(), brandOptional.get(), productDTO.getName());
            Product savedProduct = productRepository.save(newProduct);
            productDTO.setId(savedProduct.getId());
            savedProduct.setPhotoUrl(changePhotoForProduct(productDTO));
            productRepository.save(savedProduct);
        } else {
            throw new Exception("Category or brand do not exist!");
        }
    }

    @Transactional
    public void editProduct(ProductDTO productDTO) {
        productRepository.findById(productDTO.getId()).ifPresent(product -> {
            product.setName(productDTO.getName());
            Optional<Brand> brandOptional = brandRepository.getByName(productDTO.getBrand());
            brandOptional.ifPresent(product::setBrand);
            Optional<Category> categoryOptional = categoryRepository.getByName(productDTO.getCategory());
            categoryOptional.ifPresent(product::setCategory);
            if (productDTO.getEncodedPhoto() != null) {
                product.setPhotoUrl(changePhotoForProduct(productDTO));
            }
            productRepository.save(product);
        });

    }

    public List<ProductDTO> getProductsByCategoryName(String categoryName) {
        List<ProductDTO> productsByCategoryName = productRepository.getProductsByCategoryName(categoryName);
        for (ProductDTO productDTO : productsByCategoryName) {
            loadPhoto(productDTO);
            productDTO.setStockDTOS(stockRepository.getStockDetailsForProductById(productDTO.getId()));
        }
        return productsByCategoryName;
    }


    @Transactional
    public ProductDTO getProductById(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if(productOptional.isPresent()){
            ProductDTO productDTO = new ProductDTO(productOptional.get());
            productDTO.setStockDTOS(stockRepository.getStockDetailsForProductById(id));
            loadPhoto(productDTO);
            return productDTO;
        }
        return new ProductDTO();
    }

    public List<ProductDTO> getFeaturedProducts() {
        List<ProductDTO> productDTOS = productRepository.getFeaturedProducts().stream().limit(5).collect(Collectors.toList());
        for (ProductDTO productDTO : productDTOS) {
            loadPhoto(productDTO);
            productDTO.setStockDTOS(stockRepository.getStockDetailsForProductById(productDTO.getId()));
        }
        return productDTOS;
    }


    private String changePhotoForProduct(ProductDTO productDTO) {
        try {
            return saveLogo(productDTO.getEncodedPhoto(), productDTO.getId());
        } catch (Exception e) {
            return "";
        }
    }


    private String saveLogo(MultipartFile logo, Long id) {
        if (logo != null) {
            String brandId = id.toString();
            String filename = brandId + "." + IMAGE_EXTENSION;
            return photoUtils.savePhoto(logo, filename, LOGO_STORAGE_PATH, IMAGE_EXTENSION, TARGET_WIDTH_PRODUCTS, TARGET_HEIGHT_PRODUCTS);
        }
        return "";
    }

    public List<ProductDTO> getAllProducts() {
        List<ProductDTO> productDTOS = productRepository.findAll().stream().map(ProductDTO::new).collect(Collectors.toList());
        productDTOS.stream().forEach(productDTO -> {
            loadPhoto(productDTO);
            productDTO.setStockDTOS(stockRepository.getStockDetailsForProductById(productDTO.getId()));
        });
        return productDTOS;
    }

    private void loadPhoto(ProductDTO productDTO) {
        File file = new File(productDTO.getPhotoUrl());
        BufferedImage read = null;
        try {
            read = ImageIO.read(file);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try {
            ImageIO.write(read, "png", outputStream);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        String encoded = Base64.getEncoder().encodeToString(outputStream.toByteArray());
        productDTO.setPhotoUrl("data:image/png;base64," + encoded);
    }

    @Transactional
    public void deleteProductById(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        productOptional.ifPresent(productRepository::delete);
    }
}
