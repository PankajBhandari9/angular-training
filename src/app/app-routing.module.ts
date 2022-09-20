import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layouts/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'user', // it will hold the path to the user module
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
    // it will help us to load the user module dynamically
  },
  {
    path:'dashboard',
    loadChildren:()=>
    import('./dashboard/dashboard.module')
    .then(m=>m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
