import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoDynamicModule } from '@po-ui/ng-components';
import { PoWidgetModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonGroupModule } from '@po-ui/ng-components';
import { PoLinkModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoContainerModule,
    PoDynamicModule,
    PoWidgetModule,
    PoFieldModule,
    PoButtonGroupModule,
    PoLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
