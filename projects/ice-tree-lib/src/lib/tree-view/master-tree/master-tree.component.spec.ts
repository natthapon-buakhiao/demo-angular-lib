import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTreeComponent } from './master-tree.component';

describe('MasterTreeComponent', () => {
  let component: MasterTreeComponent;
  let fixture: ComponentFixture<MasterTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
