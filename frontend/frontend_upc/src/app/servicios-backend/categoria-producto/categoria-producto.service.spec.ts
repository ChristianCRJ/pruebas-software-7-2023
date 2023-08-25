import { TestBed } from '@angular/core/testing';

import { CategoriasService } from './categoria-producto.service';

describe('categoriaService', () => {
  let service: CategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
