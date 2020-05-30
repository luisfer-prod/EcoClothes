import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormularioComponent } from './formulario/formulario.component';
import { RegistroComponent } from './registro/registro.component';
import { AreaClientesComponent } from './area-clientes/area-clientes.component';
import { QuieneSomosComponent } from './quiene-somos/quiene-somos.component';
import { AppComponent } from './app.component';
import { MedioAmbienteComponent } from './medio-ambiente/medio-ambiente.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { CreditoComponent } from './credito/credito.component';
import {IncidenciasComponent} from './incidencias/incidencias.component';
import {InformacionComponent} from './informacion/informacion.component';
import {AdministradorComponent} from './administrador/administrador.component';
import {ZonaAdminComponent} from './zona-admin/zona-admin.component';


const routes: Routes = [{
  path:'formulario',
  component:FormularioComponent
},
{
  path:'registro',
  component:RegistroComponent
},
{
  path:'areaCliente',
  component:AreaClientesComponent
},
{
  path:'app',
  component:AppComponent
},
{
  path:'quieneSomos',
  component:QuieneSomosComponent
},
{
  path:'medioAmbiente',
  component:MedioAmbienteComponent
},
{
  path:'',
  component:PrincipalComponent
},
{
  path:'confirmacion',
  component:ConfirmacionComponent
},
{
  path:'credito',
  component:CreditoComponent
},
{
  path:'incidencias',
  component:IncidenciasComponent
},
{
  path:'informacion',
  component:InformacionComponent
},
{
  path:'administrador',
  component:AdministradorComponent
},
{
  path:'zona-admin',
  component:ZonaAdminComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
