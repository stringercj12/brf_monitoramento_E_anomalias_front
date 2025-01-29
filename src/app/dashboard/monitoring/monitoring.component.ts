import { Component } from '@angular/core';
import { IconComponent } from "../../core/shared/components/icon/icon.component";
import { MonitoringCardComponent } from '../../core/shared/components/monitoring-card/monitoring-card.component';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    IconComponent,
    MonitoringCardComponent,
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss'
})
export class MonitoringComponent {
  viagens = [];
}
