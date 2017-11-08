import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPxDatatableComponent } from './demo-px-datatable.component';

describe('DemoPxDatatableComponent', () => {
  let component: DemoPxDatatableComponent;
  let fixture: ComponentFixture<DemoPxDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPxDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
