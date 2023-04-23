import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  error: string | undefined = undefined;

  form = this.fb.group({
    
  })

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  editHandler() {
    return;
  }
}
