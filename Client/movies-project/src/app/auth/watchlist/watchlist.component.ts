import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {


  constructor(private auth: AuthService) {}

  
}
