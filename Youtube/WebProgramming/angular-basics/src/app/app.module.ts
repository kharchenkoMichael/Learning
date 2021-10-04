import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { Post2Component } from './components/post2/post2.component';
import { NewServiceService } from './services/new-service.service';
import { MyFormComponent } from './components/my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
