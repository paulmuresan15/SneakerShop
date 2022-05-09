package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.BrandDTO;
import com.utcn.sneakershop.model.dto.EditProductDTO;
import com.utcn.sneakershop.model.dto.ProductDTO;
import com.utcn.sneakershop.model.dto.StockDTO;
import com.utcn.sneakershop.model.entity.Brand;
import com.utcn.sneakershop.model.entity.Category;
import com.utcn.sneakershop.model.entity.Product;
import com.utcn.sneakershop.repository.BrandRepository;
import com.utcn.sneakershop.repository.CategoryRepository;
import com.utcn.sneakershop.repository.ProductRepository;
import com.utcn.sneakershop.repository.StockRepository;
import com.utcn.sneakershop.utils.PhotoUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final StockRepository stockRepository;
    private final PhotoUtils photoUtils;

    @Value("${file.image.extension}")
    private String IMAGE_EXTENSION;

    @Value("${file.storage.path.brands}")
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
            productRepository.save(newProduct);
        } else {
            throw new Exception("Category or brand do not exist!");
        }
    }

    public void editProduct(EditProductDTO productDTO){
        productRepository.findById(productDTO.getId()).ifPresent(product -> {
            product.setName(productDTO.getName());
            Optional<Brand> brandOptional = brandRepository.getByName(productDTO.getName());
            brandOptional.ifPresent(product::setBrand);
            Optional<Category> categoryOptional = categoryRepository.getByName(productDTO.getCategory());
            categoryOptional.ifPresent(product::setCategory);
            if (productDTO.getEncodedAvatar() != null) {
                product.setPhotoUrl(changePhotoForProduct(productDTO));
            }
        });
    }

    @Transactional
    public ProductDTO getProductById(Long id){
        ProductDTO product = productRepository.getProductDTOById(id);
        List<StockDTO> stockDetailsForProduct = stockRepository.getStockDetailsForProductById(id);
        product.setStockDTOS(stockDetailsForProduct);
        return product;
    }


    private String changePhotoForProduct(EditProductDTO productDTO) {
        try {
            return saveLogo(productDTO.getEncodedAvatar(), productDTO.getId());
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
}
