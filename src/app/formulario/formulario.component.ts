import { Component, OnInit,Input, HostListener  } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavegadorComponent } from '../navegador/navegador.component';
import swal from 'sweetalert';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


    codigo = null;

    clientes = null;

    flag = false;

    cookie = null;

    cliente={
      codigo:null,
      identidad:null,
      password:null
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


    ngOnInit(): void {
        this.recuperarClientes();
    }

    recuperarClientes() {
      this.productosServicio.recuperarClientes().subscribe(result => this.clientes = result);
    }

    registrarCodigo(){
      this.productosServicio.registrarCodigo(this.codigo).subscribe(datos => {
        if (datos['resultado']=='OK') {
         // alert(datos['mensaje']);
        }
      });
    }

    acceso() {

        this.recuperarClientes();

        this.clientes.forEach(element => {

            if ((this.cliente.identidad==element.nombre  || this.cliente.identidad==element.correo) && this.cliente.password==element.password) {

              this.codigo = element.codigo;
              this.flag=true;

            }

        });

        if (!this.flag) {
            swal("El usuario introducido no existe. Revise si los datos son erroneos");
        } else{
          this.registrarCodigo();
          this.router.navigate(['/areaCliente']);
        }
    }

}
