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
    this.recuperarTodos();
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

  articulos=null;

  art={
    codigo:null,
    descripcion:null,
    precio:null
  }


  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo) {
    this.articulosServicio.baja(codigo).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
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
