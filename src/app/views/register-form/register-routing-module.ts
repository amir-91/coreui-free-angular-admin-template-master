import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterFormComponent,
    data: {
      title: 'Regitser'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class registerRoutingModule {}
