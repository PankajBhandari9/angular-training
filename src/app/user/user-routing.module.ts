import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/layouts/login/login.component';
import { RegisterComponent } from './components/layouts/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component : RegisterComponent
  },{
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
