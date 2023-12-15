import {Component, Inject} from '@angular/core';
import {LoadingComponent} from "../../core/shared/components/loading/loading.component";
import {AuthService} from "../../core/services/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {IconComponent} from "../../core/shared/components/icon/icon.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ReactiveFormsModule, IconComponent, RouterModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  loading: boolean = false;

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
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
