import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';


import {MatMenuModule} from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavegadorComponent } from './navegador/navegador.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AreaClientesComponent } from './area-clientes/area-clientes.component';
import { QuieneSomosComponent } from './quiene-somos/quiene-somos.component';
import { MedioAmbienteComponent } from './medio-ambiente/medio-ambiente.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { CreditoComponent } from './credito/credito.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';









@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavegadorComponent,
    LoginComponent,
    RegistroComponent,
    AreaClientesComponent,
    QuieneSomosComponent,
    MedioAmbienteComponent,
    PrincipalComponent,
    ConfirmacionComponent,
    CreditoComponent,
    IncidenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
