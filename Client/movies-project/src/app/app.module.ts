import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './user/auth.module';
import { MovieComponent } from './movie/details/movie.component';
import { MovieModule } from './movie/movie.module';
import { MovieRoutingModule } from './movie/movie-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OtherProfileComponent } from './user/other-profile/other-profile.component';
//import { httpInterceptorProviders } from './app.interceptor';

@NgModule({
  declarations: [AppComponent, OtherProfileComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    MovieModule,
    MovieRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
  ],
  providers: [
    /* httpInterceptorProviders */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
