package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.BrandDTO;
import com.utcn.sneakershop.model.entity.Brand;
import com.utcn.sneakershop.repository.BrandRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BrandService {
    private final BrandRepository brandRepository;

    @Value("${file.image.extension}")
    private String IMAGE_EXTENSION;

    @Value("${file.storage.path.brands}")
    private String LOGO_STORAGE_PATH;


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
    public void saveNewBrand(BrandDTO brandDTO) {
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
            if (!brandDTO.getEncodedAvatar().isBlank()) {
                brand.setLogoUrl(changeLogoForBrand(brandDTO));
            }
        });
    }

    private String changeLogoForBrand(BrandDTO brandDTO) {
         try{
             byte[] logo = Optional.ofNullable(brandDTO.getEncodedAvatar())
                     .filter(encodedAvatar -> !encodedAvatar.isBlank())
                     .map(string -> string.replace("data:image/png;base64",""))
                     .map(Base64::decodeBase64)
                     .orElse(null);
             return savelogo(logo,brandDTO.getId());
         } catch (Exception e){
             return "";
         }
    }

    //TODO: add resize photo
    private String savelogo(byte[] logo, Long id) {
        if(logo!=null){
            String brandId = id.toString();
            String filename=brandId + IMAGE_EXTENSION;
            File directory = new File(LOGO_STORAGE_PATH);
            if(!directory.exists()){
                directory.mkdirs();
            }
            Path path = Paths.get(LOGO_STORAGE_PATH + File.separator + filename);
            try{
                InputStream inputStream = new ByteArrayInputStream(logo);
                BufferedImage image = ImageIO.read(inputStream);
                ByteArrayOutputStream logoOutput = new ByteArrayOutputStream();
                ImageIO.write(image,IMAGE_EXTENSION,logoOutput);
                Files.copy(new ByteArrayInputStream(logoOutput.toByteArray()),path, StandardCopyOption.REPLACE_EXISTING);
                return path.toString();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "";
    }
}
