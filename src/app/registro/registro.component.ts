import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cliente={
    nombre:"",
    correo:"",
    password:""
  }

  constructor(
    private productosServicio: ProductosService,
    private location: Location,
    private router: Router
    ) {}


  ngOnInit(): void {
  }

  registro() {

      if (this.cliente.nombre=="" || this.cliente.correo=="" || this.cliente.password=="") {
        swal("Hay en el formulario campos en blanco");
        this.router.navigate(['/registro']);

      } else {
        this.productosServicio.registro(this.cliente).subscribe(datos => {
          if (datos['resultado']=='OK') {
            swal(datos['mensaje']);
          }
        });
      }
  }

}
