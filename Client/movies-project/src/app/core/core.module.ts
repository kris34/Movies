import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  imports: [CommonModule, MaterialModule, RouterModule,],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
