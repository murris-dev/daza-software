import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosComponent } from './fotos/fotos.component';
import { HttpClientModule } from '@angular/common/http';
import { FindCatComponent } from './find-cat/find-cat.component';


@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    FindCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
