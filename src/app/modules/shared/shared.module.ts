import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports:[PageNotFoundComponent,HttpClientModule]
})
export class SharedModule { }
