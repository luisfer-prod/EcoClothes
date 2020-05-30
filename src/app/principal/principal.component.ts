import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private productosServicio: ProductosService) { }

  prendas = null

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }


  ngOnInit(): void {

    this.apareceNavegador();
    this.quitarSticky();

    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  apareceNavegador(){

    var titulo = document.getElementById('tituloNavegador');
    var navegador = document.getElementById('navegador');

    titulo.style.display='inline';
    titulo.style.visibility='visible';

    navegador.style.display='inline';
    navegador.style.visibility='visible';

  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }



  recuperarPrendas(categoria) {
    this.productosServicio.recuperarPrendas(categoria).subscribe(result => this.prendas = result);
  }

  quitarSticky(){

    var navegador = document.getElementById("navegador");

    navegador.style.position='sticky';

    // top:10px;
    // position: sticky;
   }

}
