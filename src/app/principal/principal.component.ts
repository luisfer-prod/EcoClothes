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

  ngOnInit(): void {

    this.quitarSticky();
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
