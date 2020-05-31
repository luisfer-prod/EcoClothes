import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zona-admin',
  templateUrl: './zona-admin.component.html',
  styleUrls: ['./zona-admin.component.css']
})

export class ZonaAdminComponent implements OnInit {

  constructor(private articulosServicio: ProductosService) {}

  ngOnInit(): void {
    this.recuperarDescripcion();
    this.ocultarNavegador();
  }

  ocultarNavegador(){

    var titulo = document.getElementById('tituloNavegador');
    var navegador = document.getElementById('navegador');

    titulo.style.display='none';
    titulo.style.visibility='hidden';

    navegador.style.display='none';
    navegador.style.visibility='hidden';

  }

  productos=null;

  articulos=null;

  art={
    codigo:null,
    nombre:null,
    descripcion:null,
    categoria:null,
    imagen:null,
    precio:null,
    descuento:null
  }

  recuperarDescripcion(){
    this.articulosServicio.recuperarDescripcion().subscribe(result => this.productos = result);
  }

  recuperarTodos(){
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }




  alta() {
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarDescripcion();
      }
    });
  }

  baja(codigo) {
    this.articulosServicio.baja(parseInt(codigo)).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarDescripcion();
        }

    });
  }

  bajaCategoria(codigo) {
    this.articulosServicio.bajaCategoria(parseInt(codigo)).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarDescripcion();
      }
    });
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarDescripcion();
      }
    });
  }

  seleccionar(codigo) {
    this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  }

}
