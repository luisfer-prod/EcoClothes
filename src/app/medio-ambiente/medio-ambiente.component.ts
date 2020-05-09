import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medio-ambiente',
  templateUrl: './medio-ambiente.component.html',
  styleUrls: ['./medio-ambiente.component.css']
})
export class MedioAmbienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.quitarSticky();
  }

  quitarSticky(){

    var navegador = document.getElementById("navegador");

    navegador.style.position='static';

    // top:10px;
    // position: sticky;
   }

}
