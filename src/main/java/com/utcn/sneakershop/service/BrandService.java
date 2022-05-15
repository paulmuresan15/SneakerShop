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


    @Autowired
    public BrandService(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
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
        });
    }




}
