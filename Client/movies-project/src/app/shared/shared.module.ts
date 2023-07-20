import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TitleShortenPipe } from './pipes/title-shorten.pipe';
import { MovieModule } from '../movie/movie.module';
import { ReactionsComponent } from './reactions/reactions.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ShortenPipe, TitleShortenPipe, ReactionsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ShortenPipe, TitleShortenPipe, ReactionsComponent],
})
export class SharedModule {}
