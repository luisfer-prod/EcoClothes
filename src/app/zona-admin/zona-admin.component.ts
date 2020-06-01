import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-zona-admin',
  templateUrl: './zona-admin.component.html',
  styleUrls: ['./zona-admin.component.css']
})

export class ZonaAdminComponent implements OnInit {


  productos=null;

  articulos=null;

  art={
    codigo:null,
    nombre:null,
    descripcion:null,
    imagen:null,
    precio:null,
    descuento:null,
    categoria:null
  }

  archivo = {
    nombre:null,
    nombreArchivo:null,
    base64textString:null
  }


  constructor(private articulosServicio: ProductosService,
    private router: Router) {}

  ngOnInit(): void {
    this.recuperarDescripcion();
    this.ocultarNavegador();
  }

  subirImagen(event){

    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent){
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload(){
    console.log(this.archivo);
    this.articulosServicio.uploadFile(this.archivo).subscribe(
      datos=>{
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
        }
      }
    )
  }



  ocultarNavegador(){

    var titulo = document.getElementById('tituloNavegador');
    var navegador = document.getElementById('navegador');

    titulo.style.display='none';
    titulo.style.visibility='hidden';

    navegador.style.display='none';
    navegador.style.visibility='hidden';

  }

  recuperarDescripcion(){
    this.articulosServicio.recuperarDescripcion().subscribe(result => this.productos = result);
    // this.router.navigate(['/zona-admin']);
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
