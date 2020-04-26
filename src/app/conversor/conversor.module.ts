import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ConversorComponent } from './components';
import { DataBrPipe } from './pipes';
import { ModalCotacaoComponent } from './utils';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';

@NgModule({
  declarations: [
    ConversorComponent,
    DataBrPipe,
    ModalCotacaoComponent,
    NumeroDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    ConversorService,
    MoedaService
  ]
})
export class ConversorModule { }
