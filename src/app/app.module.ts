import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';

//COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { ModaldeleteComponent } from './components/modaldelete/modaldelete.component';
import { NovoregistroComponent } from './components/novoregistro/novoregistro.component';
import { EditarregistroComponent } from './components/editarregistro/editarregistro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModaldeleteComponent,
    NovoregistroComponent,
    EditarregistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
