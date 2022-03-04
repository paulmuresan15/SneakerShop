package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
