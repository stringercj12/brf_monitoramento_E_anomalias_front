import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {LoadingComponent} from "../../core/shared/components/loading/loading.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IconComponent} from "../../core/shared/components/icon/icon.component";
import {AuthService} from "../../core/services/auth.service";
import {DomSanitizer} from "@angular/platform-browser";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ReactiveFormsModule, IconComponent, RouterModule],
  providers: [AuthService],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  loading: boolean = false;
  sentWithSuccess: boolean = false;

  constructor(
    private authService: AuthService,
    private domSanitizer: DomSanitizer
  ) {
  }


  toLogin() {

    if (this.form.invalid) {
      return;
    }

    const form = this.form.value;
    this.loading = true;
    this.authService.authenticate(form).subscribe({
      next: (e: any) => {
        console.log(e)
        this.loading = false;
        this.sentWithSuccess = true;
      },
      error: () => {
        this.loading = false;
        this.sentWithSuccess = false;
      }
    });
  }
}
