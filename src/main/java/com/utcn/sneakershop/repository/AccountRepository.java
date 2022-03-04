package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Long> {
}
