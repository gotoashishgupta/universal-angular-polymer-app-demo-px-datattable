import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PolymerModule } from '@codebakery/origami';
/**
 * @Optional: There are many collections to import, such as iron, paper, and gold elements
 */
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';

import { DemoPxDatatableRoutingModule } from './demo-px-datatable.routes.module';



import { DemoPxDatatableComponent } from './demo-px-datatable.component';

import { EditPxDatatableRowComponent } from './edit-px-datatable-row';


@NgModule({
  imports: [
    CommonModule,

    PolymerModule,
    // Optional polymer modules to help reduce markup complexity
    IronElementsModule,
    PaperElementsModule,

    DemoPxDatatableRoutingModule
  ],
  declarations: [
    DemoPxDatatableComponent,
    EditPxDatatableRowComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoPxDatatableModule { }
