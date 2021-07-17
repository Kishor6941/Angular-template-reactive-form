import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { ViewchildChildComponent } from './view-child-example/viewchild-child/viewchild-child.component';
import { FormArrayPracticeComponent } from './form-array-practice/form-array-practice.component';
import { HomeComponent } from './home/home.component';
 @NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CheckoutComponent,
    ViewChildExampleComponent,
    ViewchildChildComponent,
    FormArrayPracticeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
