import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiene-somos',
  templateUrl: './quiene-somos.component.html',
  styleUrls: ['./quiene-somos.component.css']
})
export class QuieneSomosComponent implements OnInit {

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
