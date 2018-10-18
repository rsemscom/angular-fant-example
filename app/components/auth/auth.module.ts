import { NgModule } from '@angular/core';

import {ResetComponent} from "./reset/reset.component";
import {SignupComponent} from "./signup/signup.component";
import {FormInputComponent} from "./form-input/form-input.component";
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";
import {TermsComponent} from "./terms/terms.component";
import {LoginComponent} from "./login/login.component";

import {AuthRoutingModule} from "./auth-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from "ngx-perfect-scrollbar";


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      PerfectScrollbarModule,
      AuthRoutingModule
  ],
  declarations: [
      AuthLayoutComponent,
      LoginComponent,
      ResetComponent,
      SignupComponent,
      FormInputComponent,
      TermsComponent
  ],
  providers: [
    {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AuthModule { }
