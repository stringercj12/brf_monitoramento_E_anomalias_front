import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IconComponent} from "../core/shared/components/icon/icon.component";
import {LoadingComponent} from "../core/shared/components/loading/loading.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
    imports: [
        FormsModule,
        IconComponent,
        LoadingComponent,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
