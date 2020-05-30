import { Component, OnInit,Input, HostListener  } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavegadorComponent } from '../navegador/navegador.component';
import swal from 'sweetalert';
import * as Cookies from 'js-cookie';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {



    administradores = null;

    flag = false;

    // cookieNombre = Cookies.get('nombre');
    // cookiePassword2 = Cookies.get('password2');

    administrador={
      nombre:"",
      password2:""
    }


    // @HostListener('click')
    // click() {
    //   this.login.esconder();
    // };



    constructor(
      private productosServicio: ProductosService,
      private location: Location,
      private router: Router
    ) { }


    ngOnInit() {
        this.recuperarAdministradores();
        this.quitarSticky();
    }

    quitarSticky(){

      var navegador = document.getElementById("navegador");

      navegador.style.position='static';

     }

    recuperarAdministradores() {
      this.productosServicio.recuperarAdministradores().subscribe(result => this.administradores = result);
    }


    acceso() {

        this.recuperarAdministradores();
        this.administradores.forEach(element => {

            if (this.administrador.nombre==element.admin   && this.administrador.password2==element.password) {
              this.flag=true;
              // Cookies.set('nombre', this.administrador.nombre);
              // Cookies.set('password2', this.administrador.password2);
            }
        });

        if (!this.flag) {
            swal("Este administrador no está en nuestra base de datos. Revise si los datos son erroneos");
        } else{

          this.router.navigate(['/zona-admin']);
        }
    }

}
