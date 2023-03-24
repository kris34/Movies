import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  
  form = this.fb.group({ 
    
  })

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  loginHandler(){ 

  }

}
