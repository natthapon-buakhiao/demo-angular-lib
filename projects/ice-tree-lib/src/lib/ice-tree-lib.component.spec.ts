import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceTreeLibComponent } from './ice-tree-lib.component';

describe('IceTreeLibComponent', () => {
  let component: IceTreeLibComponent;
  let fixture: ComponentFixture<IceTreeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceTreeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceTreeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
