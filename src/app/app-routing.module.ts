import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component'
import { EnterDataComponent } from './enter-data/enter-data.component';

const routes: Routes = [
  { path: '', component: EnterDataComponent },
  { path: 'showData', component: ShowDataComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }