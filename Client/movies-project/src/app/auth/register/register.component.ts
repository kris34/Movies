import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchingPass } from 'src/app/shared/validators/password-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.minLength(5), Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    repass: ['', [Validators.required]],
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
