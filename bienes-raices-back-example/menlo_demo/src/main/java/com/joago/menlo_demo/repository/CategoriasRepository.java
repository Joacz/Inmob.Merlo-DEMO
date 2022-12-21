package com.joago.menlo_demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joago.menlo_demo.model.Categoria;

public interface CategoriasRepository extends JpaRepository<Categoria, Integer> {

  Categoria findByNombre(String category);

}
