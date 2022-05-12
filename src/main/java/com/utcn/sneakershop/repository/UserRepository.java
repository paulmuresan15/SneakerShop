package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    @Query("select u from User u where u.username =:username")
    Optional<User> findByUsername(@Param("username")String username);
    @Query("select u from User u where u.email =:email")
    Optional<User> findByEmail(@Param("email")String email);
}
