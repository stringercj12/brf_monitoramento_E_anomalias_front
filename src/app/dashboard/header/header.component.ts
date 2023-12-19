import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IconComponent} from "../../core/shared/components/icon/icon.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    IconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nome = 'Eitor Roberto';
}
