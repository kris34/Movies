import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  editHandler() {
    return;
  }
}
