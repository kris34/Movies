import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  watchlist$ = this.api.loadUserWatchlist();
  noMovies: boolean = false

  constructor(private api: ApiService) { }
  ngOnInit() {

    this.watchlist$.subscribe({
      next: (v) => {
        if (v.length < 1) {
          this.noMovies = true
        }
      }
    })
  }

}
