import { TestBed, async } from '@angular/core/testing';

import { MoedaService } from './moeda.service';

describe('MoedaService', () => {
  let service: MoedaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MoedaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
