import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { CrearComponent } from './aplicacion/crear/crear.component';
import { VerComponent } from './aplicacion/ver/ver.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUsersComponent } from './usuarios/create-users/create-users.component';


@NgModule({
  declarations: [
    MainComponent,
    CrearComponent,
    VerComponent,
    PagesComponent,
    CreateUsersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
