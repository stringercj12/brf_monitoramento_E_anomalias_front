import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  providers: [HttpClient],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
  @Input({ required: true }) icon!: string;
  @Input() cssClass!: string;
  iconeSVG: any;

  constructor(
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get(`/assets/icons/${this.icon}.svg`, { responseType: "text" }).subscribe({
      next: (element) => {
        this.iconeSVG = this.domSanitizer.bypassSecurityTrustHtml(element);
      },
      error: () => {

      }
    });
  }

}
