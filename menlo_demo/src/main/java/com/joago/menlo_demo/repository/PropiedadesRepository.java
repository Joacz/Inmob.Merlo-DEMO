package com.joago.menlo_demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.joago.menlo_demo.model.Categoria;
import com.joago.menlo_demo.model.Propiedad;

public interface PropiedadesRepository extends JpaRepository<Propiedad, Integer> {

  Page<Propiedad> findAllByCategoria(Categoria categoria, Pageable page);

  Page<Propiedad> findAllByOrderByPrecioAsc(Pageable page);

  Page<Propiedad> findAllByOrderByPrecioDesc(Pageable page);

  Page<Propiedad> findAllByOrderByIdAsc(Pageable page);

  Page<Propiedad> findAllByOrderByIdDesc(Pageable page);

  Page<Propiedad> findAllByPrecioBetween(Integer p1, Integer p2, Pageable page);

  Page<Propiedad> findAllByTituloContainingAndCategoria(Pageable page, String titulo, Categoria categoria);

  Page<Propiedad> findAllByTituloContaining(Pageable page, String titulo);
}
