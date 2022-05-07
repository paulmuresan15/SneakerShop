package com.utcn.sneakershop.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "cart")
@Data
@NoArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "is_ordered")
    private boolean isOrdered;

    public Cart(User user, boolean isOrdered) {
        this.user=user;
        this.isOrdered = isOrdered;
    }
}
