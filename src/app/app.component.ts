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

  }






}
