package com.utcn.sneakershop.utils;

import lombok.NoArgsConstructor;
import org.imgscalr.Scalr;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@NoArgsConstructor
@Service
public class PhotoUtils {


    public String savePhoto(MultipartFile logo, String filename, String logoStoragePath, String imageExtension,
                            String targetWidth, String targetHeight) {
        File directory = new File(logoStoragePath);
        if(!directory.exists()){
            directory.mkdirs();
        }
        Path path = Paths.get(logoStoragePath + File.separator + filename);
        try{
            InputStream inputStream = logo.getInputStream();
            BufferedImage image = resizeImage(inputStream,targetWidth,targetHeight);
            ByteArrayOutputStream logoOutput = new ByteArrayOutputStream();
            ImageIO.write(image,imageExtension,logoOutput);
            Files.copy(new ByteArrayInputStream(logoOutput.toByteArray()),path, StandardCopyOption.REPLACE_EXISTING);
            return path.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    private BufferedImage resizeImage(InputStream inputStream, String target_width, String target_height) throws IOException {
        int width = Integer.parseInt(target_width);
        int height = Integer.parseInt(target_height);
        BufferedImage image = ImageIO.read(inputStream);
        return Scalr.resize(image, width, height);
    }


}
