import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {IconComponent} from "../../core/shared/components/icon/icon.component";
import {LoadingComponent} from "../../core/shared/components/loading/loading.component";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import {DomSanitizer} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-create-password',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    ReactiveFormsModule,
    IconComponent,
    RouterModule,
  ],
  providers: [AuthService],
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.scss'
})
export class CreatePasswordComponent {

  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private domSanitizer: DomSanitizer,
    private router: Router
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
        this.router.navigate(['auth','login'])
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
