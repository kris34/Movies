import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list$ = this.api.loadUserList();

  constructor(private api: ApiService) {
    console.log(this.list$);
    
  }
}
