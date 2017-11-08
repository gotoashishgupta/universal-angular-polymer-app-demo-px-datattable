import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoPxDatatableComponent } from './demo-px-datatable.component';

import { EditPxDatatableRowComponent } from './edit-px-datatable-row';

const routes: Routes = [
  {
    path: '', component: DemoPxDatatableComponent,
    children: [
      { path: 'edit', component: EditPxDatatableRowComponent, data: { title: 'Edit Row' } }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DemoPxDatatableRoutingModule { }
