import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.ocultarProvisional();
  }

  fecha = null;
  codigo = null;
  tarjeta = null;

  aparecer(){
    let formulario = document.getElementById("form");
    formulario.style.visibility = 'visible';
    formulario.style.display = 'inline';

    let boton = document.getElementById("boton2");
    boton.style.visibility = 'hidden';
    boton.style.display = 'none';
  }

  desaparecer(){

    let formulario = document.getElementById("form");
    formulario.style.visibility = 'hidden';
    formulario.style.display = 'none';

    let boton = document.getElementById("boton2");
    boton.style.visibility = 'visible';
    boton.style.display = 'inline';
  }

  ocultarProvisional(){
    let boton = document.getElementById("boton2");
    boton.style.visibility = 'hidden';
    boton.style.display = 'none';
  }

  compruebaDatos(){

    var fechaCambiada = this.fecha.split('-');
    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth();
    var year = d.getFullYear();

    mes++;

    console.log(fechaCambiada);
    console.log(year);
    console.log(mes);
    console.log(dia);

     if (fechaCambiada[0]<year || ( fechaCambiada[0]==year && fechaCambiada[1]<mes )
     || (  fechaCambiada[0]==year && fechaCambiada[1]==mes &&  fechaCambiada[2]<dia ) ) {

        sweetAlert('Su tarjeta de crédito esta caducada. Por favor, renuévela');

     } else {

        if (this.codigo!=null) {

          var length = Math.log(this.codigo) * Math.LOG10E + 1 | 0;
          console.log(length);

           if ( length<3 || length>3 ) {

            sweetAlert('El código de seguridad no mide 3 dígitos');

          } else {

            var patron=/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;

            if (patron.test(this.tarjeta)){
              this.router.navigate(['/confirmacion']);
            } else {
              sweetAlert('El número de tarjeta introducido no es el correcto. Debe tener el formato xxxx-xxxx-xxxx-xxxx');
            }

          }

        } else {
          sweetAlert('El código de seguridad está vacío');
        }
     }
  }

}
