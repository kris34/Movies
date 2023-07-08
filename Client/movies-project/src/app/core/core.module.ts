import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShortenPipe } from '../shared/pipes/shorten.pipe';
import { SharedModule } from '../shared/shared.module';
import { WhattowatchComponent } from './whattowatch/whattowatch.component';
import { MovieModule } from '../movie/movie.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, WhattowatchComponent],
  imports: [CommonModule, MaterialModule, RouterModule, SharedModule, MovieModule],
  exports: [HeaderComponent, FooterComponent, HomeComponent],
})
export class CoreModule {}
