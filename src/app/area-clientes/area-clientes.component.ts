import { Component, OnInit,Input, HostListener } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-area-clientes',
  templateUrl: './area-clientes.component.html',
  styleUrls: ['./area-clientes.component.css']
})
export class AreaClientesComponent implements OnInit {



  // @Input() login: LoginComponent;


  articulos=null;

  prueba=null;

  art={
    codigo:null,
    nombre:null,
    imagen:null,
    precio:null,
    descuento:null
  }

  private autoSaveInterval;
  private contador : number = 0;


  constructor(
    private productosServicio: ProductosService,
    private router: Router) {}

  ngOnInit() {
    this.recuperarTodos();
    this.sesion();
    this.aparecer();
    this.esconder();
  }

  aparecer(){
   var hola = document.getElementById('hola');
   var usuario = document.getElementById('usuario');

   hola.style.display='inline';
   hola.style.visibility='visible';

   usuario.style.display='inline';
   usuario.style.visibility='visible';
  }

  esconder(){

    var iniciar = document.getElementById('iniciar');
    var registrar = document.getElementById('registrar');
    var cerrar = document.getElementById('cerrar');


    iniciar.style.display='none';
    iniciar.style.visibility='hidden';

    registrar.style.display='none';
    registrar.style.visibility='hidden';

    cerrar.style.display='inline';
    cerrar.style.visibility='visible';
  }

  sesion(){

    this.productosServicio.sesion();

    this.autoSaveInterval = setInterval( ()=>{
      this.contador++;
      console.log(this.contador);
      if (this.contador>3600) {
        this.router.navigate(['']);
        alert('Llevas demasiado tiempo inactivo.Cerrando sesion');
        this.productosServicio.cerrarSesion();
        clearInterval(this.autoSaveInterval);
      };
    },1000);
  }


  recuperarTodos() {
    this.productosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }

  alta() {
    this.productosServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo) {
    this.productosServicio.baja(codigo).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.productosServicio.modificacion(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo) {
    this.productosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  }



}
