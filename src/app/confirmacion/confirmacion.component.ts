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

    this.productosServicio.enviarCorreo().subscribe(
      datos => {
        if (datos['resultado']=='OK') {




        }
      }
    );

    // var alert = document.getElementById('alert');

    // alert.style.display = 'block';
    // alert.style.visibility = 'visible';

    sweetAlert('Tu pedido ha sido realizado y ya está siendo transportado hacia su destino. En cuestión de días debería llegar a su domicilio                                Le hemos enviado un correo electrónico con la información del mismo y la factura. Comprueba su bandeja de entrada.');


    this.router.navigate(['']);


    setTimeout(() =>
    {
      this.productosServicio.borrarPedido().subscribe(
        datos => {
            if (datos['resultado']=='OK') {

            }
        }
      );
    },
    2000);
  }



  rechazar(){
    this.router.navigate(['']);
  }
}
