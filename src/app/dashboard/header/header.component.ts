import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IconComponent} from "../../core/shared/components/icon/icon.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppService} from "../../core/services/app.service";
import {Observable} from "rxjs";

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
  providers: [AppService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nome = 'Eitor Roberto';
  sidebarIsActive: boolean = true;

  constructor(private appService: AppService) {
    this.appService.dadosCompartilhados$.subscribe(
      (dados: any) => {
        this.sidebarIsActive = dados;
      }
    );
  }

  toggleSidebar() {

    this.appService.sidebarShow()

  }
}
