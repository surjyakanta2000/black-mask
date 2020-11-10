import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { InterfaceComponent } from '../interface/interface.component'
import { GridviewComponent } from '../gridview/gridview.component';
import { CardviewComponent } from '../cardview/cardview.component';
import { GridcardComponent } from '../gridcard/gridcard.component';
import { HomepageComponent } from '../homepage/homepage.component';
const myRoutes:Routes=[
                      {path:"interface",component:InterfaceComponent},
                      {path:"gridview",component:GridviewComponent},
                      {path:"cardview",component:CardviewComponent},
                      {path:"gridcard",component:GridcardComponent},
                      {path:"homepage",component:HomepageComponent}
                    ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(myRoutes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
