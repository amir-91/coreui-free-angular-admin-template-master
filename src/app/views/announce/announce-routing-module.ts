import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnounceComponent } from './announce.component';

const routes: Routes = [
  {
    path: '',
    component: AnnounceComponent,
    data: {
      title: 'Announce'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnounceRoutingModule {}
