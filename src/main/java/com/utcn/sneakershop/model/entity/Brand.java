package com.utcn.sneakershop.model.entity;

import com.utcn.sneakershop.model.dto.BrandDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "brands")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "logoUrl")
    private String logoUrl;

    @Lob
    @Column(name = "description")
    private String description;

    public Brand(BrandDTO brandDTO){
        this.name= brandDTO.getName();
        this.logoUrl= brandDTO.getLogoUrl();
        this.description= brandDTO.getDescription();
    }

    public Brand(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
