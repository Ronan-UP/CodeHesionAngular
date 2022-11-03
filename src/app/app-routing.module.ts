import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateInfoComponent } from './update-info/update-info.component';

const routes: Routes = [{path:'login-page' , component : LoginComponent},
{ path:'register-page' , component : RegisterComponent},
{ path:'update-info' , component : UpdateInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
