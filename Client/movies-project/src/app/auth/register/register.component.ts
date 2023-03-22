import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailValidator } from 'src/app/shared/validators/email-validator';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  pattern = '^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$'

  form = this.fb.group({
    username: ['', [Validators.minLength(5), Validators.required]],
    email: ['', [Validators.required, appEmailValidator()]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    repass: ['', [Validators.required, passwordValidator]],
  });

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  
  registerHandler() {
    if (this.form.invalid) {
      return;
    }

    const { username, email, password } = this.form.value;
    const user = { username, email, password };

    this.auth.register(user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
