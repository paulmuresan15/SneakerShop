package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.CategoryDTO;
import com.utcn.sneakershop.model.entity.Category;
import com.utcn.sneakershop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Transactional
    public List<CategoryDTO> getAllCategories(){
        List<CategoryDTO> categories = categoryRepository.findAll().stream().map(CategoryDTO::new).collect(Collectors.toList());
        return categories;
    }

    @Transactional
    public CategoryDTO getCategoryById(Long id){
        return categoryRepository.findById(id).map(CategoryDTO::new).orElse(new CategoryDTO());
    }

    @Transactional
    public void addNewCategory(CategoryDTO categoryDTO){
       categoryRepository.save(new Category(categoryDTO));
    }

    @Transactional
    public Optional<Category> getCategoryByName(String name){
        return categoryRepository.getByName(name);
    }

    @Transactional
    public void deleteCategoryById(Long id) {
        categoryRepository.deleteById(id);
    }

    @Transactional
    public void editCategory(CategoryDTO categoryDTO) {
        categoryRepository.findById(categoryDTO.getId()).ifPresent(category -> {
            category.setName(categoryDTO.getName());
            categoryRepository.save(category);
        });
    }
}
