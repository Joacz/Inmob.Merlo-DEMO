package com.joago.menlo_demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Propiedades")
public class Propiedad {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String titulo;
  private String descripcion;
  private String ubicacion;
  private String imagen;
  private Integer precio;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinTable(name = "CategoriaPropiedad", joinColumns = @JoinColumn(name = "id_propiedad"), inverseJoinColumns = @JoinColumn(name = "id_categoria"))
  private Categoria categoria;

  @Override
  public String toString() {
    return "Propiedad [id=" + id + ", titulo=" + titulo + ", descripcion=" + descripcion + ", ubicacion=" + ubicacion
        + ", imagen=" + imagen + ", precio=" + precio + "]";
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getTitulo() {
    return titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getDescripcion() {
    return descripcion;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }

  public String getUbicacion() {
    return ubicacion;
  }

  public void setUbicacion(String ubicacion) {
    this.ubicacion = ubicacion;
  }

  public String getImagen() {
    return imagen;
  }

  public void setImagen(String imagen) {
    this.imagen = imagen;
  }

  public Integer getPrecio() {
    return precio;
  }

  public void setPrecio(Integer precio) {
    this.precio = precio;
  }

}
