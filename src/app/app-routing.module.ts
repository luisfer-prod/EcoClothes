import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { RegistroComponent } from './registro/registro.component';
import { AreaClientesComponent } from './area-clientes/area-clientes.component';

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
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
