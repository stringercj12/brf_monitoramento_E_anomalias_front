import {Component, computed, effect, OnInit, signal} from '@angular/core';
import {IconComponent} from "../../core/shared/components/icon/icon.component";
import {AppService} from "../../core/services/app.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule
  ],
  providers: [AppService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  sidebarActive: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    console.log(`sidebar`)
    this.appService.sidebarIsActive.asObservable().subscribe((value) => {
      console.log(value)
      console.log(`sidebar next`)
      this.sidebarActive = value;
    });
  }


}
