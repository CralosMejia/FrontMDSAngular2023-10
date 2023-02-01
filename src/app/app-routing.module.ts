import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { CrearComponent } from './pages/aplicacion/crear/crear.component';
import { VerComponent } from './pages/aplicacion/ver/ver.component';
import { MainComponent } from './pages/main/main.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
