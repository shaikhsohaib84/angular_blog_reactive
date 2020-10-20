import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddpostComponent } from './addpost/addpost.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AddpostComponent,
    HomeComponent,
    PostComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'home', component:HomeComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'addpost', component:AddpostComponent},
      {path:'post/:id', component:PostComponent},
      {path:'update-profile', component:UpdateProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
