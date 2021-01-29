import { TestBed } from '@angular/core/testing';

import { IceTreeLibService } from './ice-tree-lib.service';

describe('IceTreeLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IceTreeLibService = TestBed.get(IceTreeLibService);
    expect(service).toBeTruthy();
  });
});
