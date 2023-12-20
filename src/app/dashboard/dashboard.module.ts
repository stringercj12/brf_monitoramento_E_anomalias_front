import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SidebarComponent} from "./sidebar/sidebar.component";


@NgModule({
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
