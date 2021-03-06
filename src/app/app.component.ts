import { Component,Input,Output, HostListener, OnInit   } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Proyecto';

  constructor(
    private router: Router
  ) { }

 @Input() login: LoginComponent;



  ngOnInit() {
    // alert(this.router.getCurrentNavigation().initialUrl);
    this.apareceNavegador();
  }

  apareceNavegador(){

    var titulo = document.getElementById('tituloNavegador');
    var navegador = document.getElementById('navegador');

    titulo.style.display='inline';
    titulo.style.visibility='visible';

    navegador.style.display='inline';
    navegador.style.visibility='visible';

  }




  apareceAyuda(){

    var ayuda = document.getElementById("panel");
    var body = document.getElementById("cuerpoBody");

    ayuda.style.display = "inline";
    ayuda.style.visibility = "visible";

    // body.style.filter = "brightness(0.4)";

  }



}
