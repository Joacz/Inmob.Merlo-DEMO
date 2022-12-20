package com.joago.menlo_demo.service.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joago.menlo_demo.model.Categoria;
import com.joago.menlo_demo.repository.CategoriasRepository;
import com.joago.menlo_demo.service.ICategoriasService;

@Service
public class CategoriasServiceJpa implements ICategoriasService {

  @Autowired
  private CategoriasRepository repo;

  @Override
  public void delete(Categoria categoria) {
    repo.delete(categoria);
  }

  @Override
  public List<Categoria> findAll() {
    return repo.findAll();
  }

  @Override
  public void save(Categoria categoria) {
    repo.save(categoria);
  }

  @Override
  public Categoria findById(Integer id) {
    Optional<Categoria> opt = repo.findById(id);
    return opt.get();
  }

  public Categoria findByName(String category) {
    return repo.findByNombre(category);
  }

}
