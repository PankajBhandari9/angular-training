import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,

    AppRoutingModule  // routing module should be the last module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
