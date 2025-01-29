import { Component, computed, effect, Input, OnInit, signal } from '@angular/core';
import { IconComponent } from "../../core/shared/components/icon/icon.component";
import { AppService } from "../../core/services/app.service";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  providers: [AppService,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() sidebarActive: boolean = false;

  menu = [
    {
      icon: 'dashboard2',
      title: 'Dashboard Negócio',
      route: 'dashboard-business'
    },
    {
      icon: 'monitoring',
      title: 'Monitoramento',
      route: 'monitoring'
    },
    {
      icon: 'anomaly',
      title: 'Painel de anomalias',
      route: 'panel-anomaly'
    },
    {
      icon: 'retroalimentacao',
      title: 'Retroalimentação',
      route: 'retroalimentation'
    },
    {
      icon: 'trucks',
      title: 'Disponibilidade',
      route: 'disponibility'
    },
    {
      icon: 'notes-checklist-flip',
      title: 'Consulta de canhoto',
      route: 'left-handed-consultation'
    },
    {
      icon: 'painel-aeroporto1',
      title: 'Painel aeroporto',
      route: 'airport-panel'
    },
    {
      icon: 'vehicle',
      title: 'Viagens',
      route: 'trips'
    },
    {
      icon: 'relatorios',
      title: 'Relatórios',
      route: 'reports',
      subMenu: [
        {
          icon: 'relatorios',
          title: 'Relatórios',
          route: 'reports',
        },
      ]
    },
    {
      icon: 'cadastro',
      title: 'Cadastro',
      route: 'register'
    },

  ]

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    console.log(`sidebar`)
    this.appService.sidebarIsActive.subscribe((value) => {
      console.log(value)
      console.log(`sidebar next`)
      this.sidebarActive = value;
    });
  }


}
