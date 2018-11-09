import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainStatusComponent } from './train-status/train-status.component';

const routes: Routes = [
    { path: '**', component: TrainStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
