import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TitleShortenPipe } from './pipes/title-shorten.pipe';

@NgModule({
  declarations: [ShortenPipe, TitleShortenPipe],
  imports: [CommonModule],
  exports: [ShortenPipe, TitleShortenPipe],
})
export class SharedModule {}
