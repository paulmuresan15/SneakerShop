package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    @Query("select c from Cart c left join User u on c.user.id=u.id where u.id= :id and c.isOrdered=false ")
    Cart getCartByUserId(@Param("id")Long userId);
}
