import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-edit-px-datatable-row',
  template: `
    <p>
      edit-px-datatable-row works!
    </p>
    <pre>{{rowData | json}}</pre>
  `,
  styles: [],
  // encapsulation: ViewEncapsulation.Native,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPxDatatableRowComponent implements OnInit {

  @Input('rowData')
  public rowData: object;

  constructor() { }

  public ngOnInit() {
    console.log(this.rowData);
  }

}
