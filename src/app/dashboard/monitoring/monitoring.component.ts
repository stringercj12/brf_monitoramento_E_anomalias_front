import {Component} from '@angular/core';
import {IconComponent} from "../../core/shared/components/icon/icon.component";

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss'
})
export class MonitoringComponent {
  viagens = [];
}
