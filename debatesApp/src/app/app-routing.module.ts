import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatedebateComponent} from './createdebate/createdebate.component';

const routes: Routes = [{
  path: '', component: CreatedebateComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
