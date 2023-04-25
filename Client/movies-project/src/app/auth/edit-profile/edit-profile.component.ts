import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  error: string | undefined = undefined;

  form = this.fb.group({
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  editHandler() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    

    this.auth.edit(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.error = err.error.error;
      },
    });
  }
}
