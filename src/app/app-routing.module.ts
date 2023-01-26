import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { CrearComponent } from './pages/aplicacion/crear/crear.component';
import { VerComponent } from './pages/aplicacion/ver/ver.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'createApp', component:CrearComponent},
  {path:'verApp', component:VerComponent},
  {path:'mainPage', component:MainComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
