import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      repass: [],
    }),
  });

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  
}
