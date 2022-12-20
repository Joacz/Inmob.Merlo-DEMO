package com.joago.menlo_demo.service.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.joago.menlo_demo.model.Categoria;
import com.joago.menlo_demo.model.Propiedad;
import com.joago.menlo_demo.repository.PropiedadesRepository;
import com.joago.menlo_demo.service.IPropiedadesService;

@Service
public class PropiedadesServiceJpa implements IPropiedadesService {

  @Autowired
  private PropiedadesRepository repo;

  @Override
  public Page<Propiedad> findAllByName(String name, Integer page) {
    return repo.findAllByTituloContaining(PageRequest.of(page, 10), name);
  }

  @Override
  public void delete(Propiedad propiedad) {
    repo.delete(propiedad);
  }

  @Override
  public List<Propiedad> findAll() {
    return repo.findAll();
  }

  @Override
  public Propiedad findById(Integer id) {
    Optional<Propiedad> opt = repo.findById(id);
    return opt.get();
  }

  @Override
  public Page<Propiedad> findByPageByCategory(Integer pageNum, Categoria categoria) {
    Page<Propiedad> page = repo.findAllByCategoria(categoria, PageRequest.of(pageNum, 10));
    return page;
  }

  @Override
  public Page<Propiedad> findByPageMaxPrice(Integer pageNum, Integer maxPrice) {
    Page<Propiedad> page = repo.findAllByPrecioBetween(0, maxPrice, PageRequest.of(pageNum, 10));
    return page;
  }

  @Override
  public Page<Propiedad> findByPageOrderByLatest(Integer pageNum) {
    Page<Propiedad> page = repo.findAllByOrderByIdDesc(PageRequest.of(pageNum, 10));
    return page;
  }

  @Override
  public Page<Propiedad> findByPageOrderByOldest(Integer pageNum) {
    Page<Propiedad> page = repo.findAllByOrderByIdAsc(PageRequest.of(pageNum, 10));
    return page;
  }

  @Override
  public Page<Propiedad> findByPageOrderByPriceHigher(Integer pageNum) {
    Page<Propiedad> page = repo.findAllByOrderByPrecioDesc(PageRequest.of(pageNum, 10));
    return page;
  }

  @Override
  public Page<Propiedad> findByPageOrderByPriceLower(Integer pageNum) {
    Page<Propiedad> page = repo.findAllByOrderByPrecioAsc(PageRequest.of(pageNum, 10));
    return page;
  }

  @Override
  public Page<Propiedad> findByPage(Integer pageNum) {
    Page<Propiedad> page = repo.findAll(PageRequest.of(pageNum, 10));
    return page;
  }

  @Override
  public Page<Propiedad> searchByNameAndCategory(Integer pageNum, String text, Categoria category) {
    Page<Propiedad> page = repo.findAllByTituloContainingAndCategoria(PageRequest.of(pageNum, 10), text, category);
    return page;
  }

  @Override
  public void save(Propiedad propiedad) {
    repo.save(propiedad);
  }

}
