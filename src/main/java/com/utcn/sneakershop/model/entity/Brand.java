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
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    public Brand(BrandDTO brandDTO){
        this.name= brandDTO.getName();

    }

    public Brand(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
