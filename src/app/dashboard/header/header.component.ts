import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output} from '@angular/core';
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
  @Output() menuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: AppService) {
    this.appService.dadosCompartilhados$.subscribe(
      (dados: any) => {
        this.sidebarIsActive = dados;
      }
    );
  }

  toggleSidebar() {
    this.sidebarIsActive = !this.sidebarIsActive;
    this.menuEvent.emit(this.sidebarIsActive);

  }
}
