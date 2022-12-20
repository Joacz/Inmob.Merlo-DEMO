package com.joago.menlo_demo.service;

import java.util.List;

import com.joago.menlo_demo.model.Categoria;

public interface ICategoriasService {
  
  public List<Categoria> findAll();

  public Categoria findById(Integer id);

  public void delete(Categoria categoria);

  public void save(Categoria categoria);

}
