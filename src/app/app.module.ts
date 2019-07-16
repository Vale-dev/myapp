import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
