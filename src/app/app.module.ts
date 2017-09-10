import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AddComponent } from './components/add/add.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule,Routes} from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
const appRoutes:Routes=[{path:"profile",component:ProfileComponent},{path:"",component:HomeComponent},{path:"add",component:AddComponent},{path:"contacts",component:ContactComponent}];
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,FormsModule,ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
