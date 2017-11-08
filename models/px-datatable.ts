import { List } from 'immutable';
export class PxDatatableRow {
  public row: { [key: string]: any };
}
export class PxDatatable {
  public row: List<PxDatatableRow>;
}
