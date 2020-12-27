import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing-module';

@NgModule({
  imports: [
    MenuRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ MenuComponent ]
})
export class MenuModule { }
