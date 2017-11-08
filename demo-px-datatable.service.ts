import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import '@modules/shared/util/rxjs-debug';

import { List } from 'immutable';

@Injectable()
export class DemoPxDatatableService {
  private _datatableItemsApiEndpoint = '/api/datatableItems';

  private _datatableItemsiColDefsApiEndpoint = '/api/datatableItemsColDefs';
  constructor(private http: HttpClient) { }

  public get datatableItems$(): Observable<List<{}>> {
    return this.http
      .get(`${this._datatableItemsApiEndpoint}`)
      .debug('get datatableItems endpoint')
      .map(res => res as List<{}>)
      .share();
  }

  public get datatableItemsMeta$(): Observable<List<{}>> {
    return this.http
      .get(`${this._datatableItemsiColDefsApiEndpoint}`)
      .debug('get _datatableItemsiColDefsApiEndpoint endpoint')
      .map(res => res as List<{}>)
      .share();
  }
}
