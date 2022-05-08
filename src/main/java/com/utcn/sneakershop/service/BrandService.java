package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.BrandDTO;
import com.utcn.sneakershop.model.entity.Brand;
import com.utcn.sneakershop.repository.BrandRepository;
import com.utcn.sneakershop.utils.PhotoUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BrandService {

    private final BrandRepository brandRepository;
    private final PhotoUtils photoUtils;

    @Value("${file.image.extension}")
    private String IMAGE_EXTENSION;

    @Value("${file.storage.path.brands}")
    private String LOGO_STORAGE_PATH;

    @Value("${file.image.width}")
    private String TARGET_WIDTH;

    @Value("${file.image.height}")
    private String TARGET_HEIGHT;


    @Autowired
    public BrandService(BrandRepository brandRepository, PhotoUtils photoUtils) {
        this.brandRepository = brandRepository;
        this.photoUtils = photoUtils;
    }

    @Transactional
    public List<BrandDTO> getAllBrands() {
        return brandRepository.findAll().stream().map(BrandDTO::new).collect(Collectors.toList());
    }

    @Transactional
    public BrandDTO getBrandById(Long id) {
        return brandRepository.findById(id).map(BrandDTO::new).orElse(new BrandDTO());
    }

    @Transactional
    public void addNewBrand(BrandDTO brandDTO) {
        brandRepository.save(new Brand(brandDTO));
    }

    @Transactional
    public void deleteBrandById(Long id) {
        brandRepository.deleteById(id);
    }

    @Transactional
    public void editBrand(BrandDTO brandDTO) {
        brandRepository.findById(brandDTO.getId()).ifPresent(brand -> {
            brand.setName(brandDTO.getName());
            brand.setDescription(brandDTO.getDescription());
            if (brandDTO.getEncodedAvatar() != null) {
                brand.setLogoUrl(changeLogoForBrand(brandDTO));
            }
        });
    }

    private String changeLogoForBrand(BrandDTO brandDTO) {
        try {
            return saveLogo(brandDTO.getEncodedAvatar(), brandDTO.getId());
        } catch (Exception e) {
            return "";
        }
    }


    private String saveLogo(MultipartFile logo, Long id) {
        if (logo != null) {
            String brandId = id.toString();
            String filename = brandId + "." + IMAGE_EXTENSION;
            return photoUtils.savePhoto(logo, filename, LOGO_STORAGE_PATH, IMAGE_EXTENSION, TARGET_WIDTH, TARGET_HEIGHT);
        }
        return "";
    }


}
