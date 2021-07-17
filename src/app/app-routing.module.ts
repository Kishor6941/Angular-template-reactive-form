import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormArrayPracticeComponent } from './form-array-practice/form-array-practice.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'sign-in', component:SigninComponent
  },
  {
    path: 'checkout', component:CheckoutComponent
  },
  {
    path: 'view-child', component:ViewChildExampleComponent
  },
  {
    path: 'form-array', component:FormArrayPracticeComponent
  },
  {
    path: '**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
