import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConversorComponent } from './conversor.component';
import { NumeroDirective } from './../directives';
import { DataBrPipe } from './../pipes';
import { MoedaService, ConversorService } from './../services';
import { ModalCotacaoComponent } from './../utils';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent
       ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        MoedaService,
        ConversorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
