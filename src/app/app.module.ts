import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { CardviewComponent } from './cardview/cardview.component';
import { GridviewComponent } from './gridview/gridview.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GridcardComponent } from './gridcard/gridcard.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    CardviewComponent,
    GridviewComponent,
    HomepageComponent,
    GridcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
