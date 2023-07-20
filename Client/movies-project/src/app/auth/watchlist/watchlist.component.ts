import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  constructor(private auth: AuthService, private api: ApiService) {
    this.getWatchlist()
  }

  getWatchlist() {
    this.api.loadUserWatchlist().subscribe({
      next: (v) => {
        console.log(v);
      },
    });
  }
}
