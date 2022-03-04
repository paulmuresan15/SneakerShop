package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
