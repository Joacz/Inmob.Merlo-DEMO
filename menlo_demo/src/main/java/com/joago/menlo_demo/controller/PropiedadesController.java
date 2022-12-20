package com.joago.menlo_demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.joago.menlo_demo.model.Categoria;
import com.joago.menlo_demo.model.Propiedad;
import com.joago.menlo_demo.service.db.CategoriasServiceJpa;
import com.joago.menlo_demo.service.db.PropiedadesServiceJpa;

@RestController
@RequestMapping("/api/propiedades")
public class PropiedadesController {

  @Autowired
  private PropiedadesServiceJpa propiedadesService;

  @Autowired
  private CategoriasServiceJpa categoriasService;

  @GetMapping("/getAll")
  @CrossOrigin(origins = "*")
  public List<Propiedad> getAll() {
    return propiedadesService.findAll();
  }

  @GetMapping
  @CrossOrigin(origins = "*")
  public Page<Propiedad> getAllPageable(@RequestParam Integer page) {
    return propiedadesService.findByPage(page);
  }

  @GetMapping("/categoria/{categoria}")
  @CrossOrigin(origins = "*")
  public Page<Propiedad> getAllPageableCategoria(@RequestParam Integer page, @PathVariable String categoria) {
    return propiedadesService.findByPageByCategory(page, categoriasService.findByName(categoria));
  }

  @GetMapping("/precio/menor")
  @CrossOrigin(origins = "*")
  public Page<Propiedad> getAllPageableLowerPrice(@RequestParam Integer page) {
    return propiedadesService.findByPageOrderByPriceLower(page);
  }

  @GetMapping("/precio/mayor")
  @CrossOrigin(origins = "*")
  public Page<Propiedad> getAllPageableHigherPrice(@RequestParam Integer page) {
    return propiedadesService.findByPageOrderByPriceHigher(page);
  }

  @GetMapping("/fecha/reciente")
  @CrossOrigin(origins = "*")
  public Page<Propiedad> getAllPageableRecent(@RequestParam Integer page) {
    return propiedadesService.findByPageOrderByLatest(page);
  }

  @GetMapping("/fecha/antiguo")
  @CrossOrigin(origins = "*")
  public Page<Propiedad> getAllPageableOldest(@RequestParam Integer page) {
    return propiedadesService.findByPageOrderByOldest(page);
  }

  @GetMapping("/precio/{maxPrice}")
  @CrossOrigin(origins = "*")
  public Page<Propiedad> getAllPageableMaxPrice(@RequestParam Integer page, @PathVariable Integer maxPrice) {
    return propiedadesService.findByPageMaxPrice(page, maxPrice);
  }

  @GetMapping("/{id}")
  @CrossOrigin(origins = "*")
  public Propiedad getById(@PathVariable Integer id) {
    return propiedadesService.findById(id);
  }

  @GetMapping("/search")
  @CrossOrigin(origins = "*")
  public Page<Propiedad> search(@RequestParam String text, @RequestParam String category, @RequestParam Integer page) {

    Categoria cat = categoriasService.findByName(category);

    if (cat == null) {
      return propiedadesService.findAllByName(text, page);
    }

    return propiedadesService.searchByNameAndCategory(page, text, cat);
  }

  @PostMapping("/")
  @CrossOrigin(origins = "*")
  public ResponseEntity<Propiedad> create(@RequestBody Propiedad propiedad) {

    try {
      propiedadesService.save(propiedad);
      return new ResponseEntity<Propiedad>(propiedad, HttpStatus.OK);

    } catch (Exception e) {
      System.out.println(e);

      return new ResponseEntity<Propiedad>(propiedad, HttpStatus.BAD_REQUEST);
    }

  }

  @DeleteMapping("/{id}")
  @CrossOrigin(origins = "*")
  public ResponseEntity<Propiedad> delete(@PathVariable Integer id) {

    Propiedad propiedad = propiedadesService.findById(id);

    propiedad.setImagen("img/" + propiedad.getImagen());

    try {
      propiedadesService.delete(propiedad);
      return new ResponseEntity<Propiedad>(propiedad, HttpStatus.OK);

    } catch (Exception e) {
      System.out.println(e);

      return new ResponseEntity<Propiedad>(propiedad, HttpStatus.NOT_FOUND);
    }

  }
}
