package com.utcn.sneakershop.repository;

import com.utcn.sneakershop.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

    @Query("select r from Role r " +
            "left join User u on r.id=u.role.id " +
            "where u.id = :userId")
    Set<Role> findRolesForUser(@Param("userId") Long id);

    @Query("select r from Role r " +
            "where r.id=1")
    Role findAdminRole();

    @Query("select r from Role r " +
            "where r.id=2")
    Role findNormalUserRole();
}
