import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(module => module.DashboardModule)
  },
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
