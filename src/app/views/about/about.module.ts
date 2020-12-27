import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing-module';

@NgModule({
  imports: [
    AboutRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ AboutComponent ]
})
export class AboutModule { }
