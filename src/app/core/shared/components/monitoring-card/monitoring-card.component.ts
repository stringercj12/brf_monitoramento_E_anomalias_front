import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  selector: 'app-monitoring-card',
  standalone: true,
  imports: [
    IconComponent,
    TimelineComponent
  ],
  templateUrl: './monitoring-card.component.html',
  styleUrl: './monitoring-card.component.scss'
})
export class MonitoringCardComponent {
  isExpanded: boolean = false;

  steps = [];

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
