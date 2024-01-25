import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {MonitoringComponent} from "./monitoring/monitoring.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "monitoring",
        pathMatch: "full"
      },
      {
        path: "",
        component: MonitoringComponent
      },
      {
        path: "monitoring",
        component: MonitoringComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
