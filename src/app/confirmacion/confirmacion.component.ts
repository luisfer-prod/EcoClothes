import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  constructor(private router:Router,
    private productosServicio: ProductosService) { }

  ngOnInit(): void {
  }

  confirmar(){

    this.productosServicio.borrarPedido().subscribe(
      datos => {
          if (datos['resultado']=='OK') {
        //   alert(datos['mensaje']);
        //   this.recuperarTodos();
          }
      }
    );

    this.router.navigate(['']);

    var alert = document.getElementById('alert');
    alert.style.display = 'block';
    alert.style.visibility = 'visible';
  }

  rechazar(){
    this.router.navigate(['']);
  }
}
