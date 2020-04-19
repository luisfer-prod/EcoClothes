import { Component, OnInit,Input, HostListener } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private productosServicio: ProductosService
  ) { }


  ngOnInit(): void {

  }


  // @Input() formulario: FormularioComponent;

  // @HostListener('click')
  // click() {
  //   this.esconder();
  // }

   cerrarSesion(){
    this.restaurarBotones();
    this.borrarUltimo();
    this.router.navigate(['']);
   }

   borrarUltimo(){
    this.productosServicio.borrarUltimo().subscribe(datos => {
      if (datos['resultado']=='OK') {
       // alert(datos['mensaje']);
      }
    });
   }

   restaurarBotones(){

    var  iniciar = document.getElementById('iniciar');
    var registrar = document.getElementById('registrar');
    var cerrar = document.getElementById('cerrar');
    var hola = document.getElementById('hola');
    var usuario = document.getElementById('usuario');

    iniciar.style.display='inline';
    iniciar.style.visibility='visible';

    registrar.style.display='inline';
    registrar.style.visibility='visible';

    cerrar.style.display='none';
    cerrar.style.visibility='hidden';

    hola.style.display='none';
    hola.style.visibility='hidden';

    usuario.style.display='none';
    usuario.style.visibility='hidden';
  }


}
