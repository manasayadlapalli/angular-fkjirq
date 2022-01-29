import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RedmiComponent } from './redmi/redmi.component';
import { PocoComponent } from './poco/poco.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { RealmeComponent } from './realme/realme.component';
import { HonourComponent } from './honour/honour.component';
import { AppRoutingModule } from './app.routing.module';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ,ModalModule.forRoot()],
  declarations: [ AppComponent,TopBarComponent, RedmiComponent, PocoComponent, OneplusComponent, RealmeComponent, HonourComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
