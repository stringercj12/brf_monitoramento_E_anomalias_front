import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    LoginComponent
  ]
})
export class AuthModule { }
