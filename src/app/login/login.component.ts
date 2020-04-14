import { Component, OnInit,Input, HostListener } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() formulario: FormularioComponent;

  // @HostListener('click')
  // click() {
  //   this.esconder();
  // }

  esconder(){
    let iniciar = document.getElementById('iniciar');
    let registrar = document.getElementById('registrar');
    let cerrar = document.getElementById('cerrar');

    iniciar.style.display='none';
    iniciar.style.visibility='hidden';

    registrar.style.display='none';
    registrar.style.visibility='hidden';

    cerrar.style.display='inline';
    cerrar.style.visibility='visible';
  }

}
