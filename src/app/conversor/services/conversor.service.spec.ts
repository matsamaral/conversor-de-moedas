import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  let service: ConversorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ConversorService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
