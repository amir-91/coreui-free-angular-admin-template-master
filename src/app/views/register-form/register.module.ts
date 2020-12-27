import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RegisterFormComponent } from './register-form.component';
import { registerRoutingModule } from './register-routing-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    registerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule
  ],
  declarations: [ RegisterFormComponent ]
})
export class MenuModule { }
