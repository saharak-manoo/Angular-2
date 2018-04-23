import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from '../first/first.component';
import { First2Component } from '../first2/first2.component';
import { SecondComponent } from '../second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

enableProdMode();

const appRoutes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'firstxxx', component: First2Component }

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    First2Component,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
