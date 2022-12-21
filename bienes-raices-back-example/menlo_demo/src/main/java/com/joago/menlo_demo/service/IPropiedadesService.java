package com.joago.menlo_demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.joago.menlo_demo.model.Categoria;
import com.joago.menlo_demo.model.Propiedad;

public interface IPropiedadesService {

  public List<Propiedad> findAll();

  public Page<Propiedad> findAllByName(String name, Integer page);

  public Page<Propiedad> findByPage(Integer page);

  public Page<Propiedad> findByPageByCategory(Integer page, Categoria categoria);

  public Page<Propiedad> findByPageMaxPrice(Integer page, Integer maxPrice);

  public Page<Propiedad> findByPageOrderByLatest(Integer page);

  public Page<Propiedad> findByPageOrderByOldest(Integer page);

  public Page<Propiedad> findByPageOrderByPriceHigher(Integer page);

  public Page<Propiedad> findByPageOrderByPriceLower(Integer page);

  public Page<Propiedad> searchByNameAndCategory(Integer pageNum, String titulo, Categoria category);

  public Propiedad findById(Integer id);

  public void delete(Propiedad propiedad);

  public void save(Propiedad propiedad);

}
