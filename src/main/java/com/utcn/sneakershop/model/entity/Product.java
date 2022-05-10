package com.utcn.sneakershop.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @Column(name = "photo_url")
    private String photoUrl;
    @Column(name = "name")
    private String name;


    public Product(Category category, Brand brand, String name,String photoUrl) {
        this.category = category;
        this.brand = brand;
        this.name = name;
        this.photoUrl=photoUrl;
    }
}
