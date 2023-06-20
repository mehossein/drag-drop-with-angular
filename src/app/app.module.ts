import { BASE_URL } from './core/classes/base-url.const';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DivisionModule } from './division/division.module';
import { environment } from 'src/environments/environment';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, DivisionModule, DragDropModule, BrowserAnimationsModule],
  providers: [{ provide: BASE_URL, useValue: environment.baseUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
