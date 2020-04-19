import { Component, OnInit,Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  constructor(
    private productosServicio: ProductosService
  ) { }

  nombre=null;

  @Input() login: LoginComponent;

  ngOnInit(): void {
    this.extraerNombre();
    this.esconderSesionInicio();
  }

  extraerNombre(){
    this.productosServicio.extraerNombre().subscribe(result => this.nombre = result);
  }

  esconderSesionInicio(){

    var hola = document.getElementById('hola');
    var usuario = document.getElementById('usuario');

    hola.style.display='none';
    hola.style.visibility='hidden';

    usuario.style.display='none';
    usuario.style.visibility='hidden';
  }








}
