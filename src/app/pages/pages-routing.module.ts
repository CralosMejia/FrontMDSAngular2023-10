import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './aplicacion/crear/crear.component';
import { VerComponent } from './aplicacion/ver/ver.component';
import { MainComponent } from './main/main.component';
import { PagesComponent } from './pages.component';
import { CreateUsersComponent } from './usuarios/create-users/create-users.component';

const routes: Routes = [
  {path:'dashboard', component:PagesComponent,children:[
    {path:'createApp', component:CrearComponent},
    {path:'verApp', component:VerComponent},
    {path:'mainPage', component:MainComponent},
    {path:'userCreate', component:CreateUsersComponent},
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
