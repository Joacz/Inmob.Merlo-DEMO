package com.joago.menlo_demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joago.menlo_demo.model.Categoria;
import com.joago.menlo_demo.service.db.CategoriasServiceJpa;

@RestController
@RequestMapping("/api/categorias")
public class CategoriasController {

    @Autowired
    private CategoriasServiceJpa categoriasService;

    @GetMapping("/")
    @CrossOrigin(origins = "*")
    public List<Categoria> findAll() {
        return categoriasService.findAll();
    }

    @PostMapping("/")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Categoria> create(@RequestBody Categoria categoria) {

        try {
            categoriasService.save(categoria);
            return new ResponseEntity<Categoria>(categoria, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Categoria>(categoria, HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*")
    public Categoria findAll(@PathVariable Integer id) {
        return categoriasService.findById(id);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Categoria> delete(@PathVariable Integer id) {

        Categoria categoria = categoriasService.findById(id);

        try {
            categoriasService.delete(categoria);
            return new ResponseEntity<Categoria>(categoria, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<Categoria>(categoria, HttpStatus.NOT_FOUND);
        }

    }
}
