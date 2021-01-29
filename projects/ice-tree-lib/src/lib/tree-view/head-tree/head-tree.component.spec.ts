import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTreeComponent } from './head-tree.component';

describe('HeadTreeComponent', () => {
  let component: HeadTreeComponent;
  let fixture: ComponentFixture<HeadTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
