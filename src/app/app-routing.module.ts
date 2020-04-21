import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { RegistroComponent } from './registro/registro.component';
import { AreaClientesComponent } from './area-clientes/area-clientes.component';
import { QuieneSomosComponent } from './quiene-somos/quiene-somos.component';
import { AppComponent } from './app.component';
import { MedioAmbienteComponent } from './medio-ambiente/medio-ambiente.component';
import { PrincipalComponent } from './principal/principal.component';

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
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
