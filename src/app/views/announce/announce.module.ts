import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AnnounceComponent } from './announce.component';
import { AnnounceRoutingModule } from './announce-routing-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AnnounceRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule
  ],
  declarations: [ AnnounceComponent ]
})
export class AnnounceModule { }
