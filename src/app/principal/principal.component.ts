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
  }

  recuperarPrendas(categoria) {
    this.productosServicio.recuperarPrendas(categoria).subscribe(result => this.prendas = result);
  }

}
