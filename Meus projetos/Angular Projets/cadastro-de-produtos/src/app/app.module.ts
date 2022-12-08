import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoContainerModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoButtonModule,
    PoContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }