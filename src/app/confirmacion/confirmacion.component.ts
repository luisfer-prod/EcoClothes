import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  confirmar(){

    this.router.navigate(['']);

    var alert = document.getElementById('alert');
    alert.style.display = 'block';
    alert.style.visibility = 'visible';
  }

  rechazar(){
    this.router.navigate(['']);
  }
}
