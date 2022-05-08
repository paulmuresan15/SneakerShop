package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.entity.Privilege;
import com.utcn.sneakershop.model.entity.Role;
import com.utcn.sneakershop.repository.PrivilegeRepository;
import com.utcn.sneakershop.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class RoleService {
    private final RoleRepository roleRepository;
    private final PrivilegeRepository privilegeRepository;

    @Autowired
    public RoleService(RoleRepository roleRepository, PrivilegeRepository privilegeRepository) {
        this.roleRepository = roleRepository;
        this.privilegeRepository = privilegeRepository;
    }

    @Transactional

    public void addRoles(){
        Privilege adminPrivilege = new Privilege(Privilege.PrivilegeName.ADMIN);
        Role admin = new Role(Role.RoleName.ROLE_ADMIN, Set.of(adminPrivilege));
        Privilege userPrivilege = new Privilege(Privilege.PrivilegeName.NORMAL_USER);
        Role normalUser = new Role(Role.RoleName.ROLE_NORMAL_USER,Set.of(userPrivilege));
        privilegeRepository.saveAll(List.of(adminPrivilege,userPrivilege));
        roleRepository.saveAll(List.of(admin,normalUser));
    }
}
