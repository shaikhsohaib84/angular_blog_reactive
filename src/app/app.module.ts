import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddpostComponent } from './addpost/addpost.component';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AddpostComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'addpost', component:AddpostComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
