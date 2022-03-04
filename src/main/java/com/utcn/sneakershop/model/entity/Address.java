package com.utcn.sneakershop.model.entity;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "address")
@Data
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "county")
    private String county;

    @Column(name = "city")
    private String city;

    @Column(name = "street_number")
    private String streetNumber;

    @Column(name = "building")
    private String building;

    @Column(name = "flat")
    private String flat;

    @Column(name = "floor")
    private String floor;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Type(type = "yes_no")
    @Column(name = "is_shipping_address")
    private boolean isShippingAddress;

}
