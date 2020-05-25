import { Component, OnInit,Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ProductosService } from '../productos.service';
import { Observable } from "rxjs/internal/Observable";
import { interval } from 'rxjs';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  constructor(
    private productosServicio: ProductosService,
  ) { }



  @Input() login: LoginComponent;

  nombre=null;

  ngOnInit(): void {

    this.nombre = interval(2000).subscribe(() => this.productosServicio.extraerNombre().subscribe(result => this.nombre=result));
    // result => (typeof(this.nombre))?'string':this.nombre= result)
    this.esconderSesionInicio();
  }

  extraerNombre(){
    this.productosServicio.extraerNombre().subscribe(result => this.nombre=result);
   }

  esconderSesionInicio(){

    var hola = document.getElementById('hola');
    var usuario = document.getElementById('usuario');
    var boton = document.getElementById('botonCliente');
    var alert = document.getElementById('alert');

    hola.style.display='none';
    hola.style.visibility='hidden';

    usuario.style.display='none';
    usuario.style.visibility='hidden';

    alert.style.display = 'none';
    alert.style.visibility = 'hidden';

    boton.style.display = 'none';
    boton.style.visibility = 'hidden';

  }
  }
