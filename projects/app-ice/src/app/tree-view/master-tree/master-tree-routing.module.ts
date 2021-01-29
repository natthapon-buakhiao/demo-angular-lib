import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterTreeComponent } from './master-tree.component';

const routes: Routes = [
  {path:"",component:MasterTreeComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterTreeRoutingModule { }
