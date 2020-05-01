import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor() { }

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
    // console.log(year);
    // console.log(mes);
    // console.log(dia);
  }

}
