import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieSectionComponent } from './pages/home/movie-section/movie-section.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { MovieComponent } from './ui/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSectionComponent,
    MovieDetailsComponent,
    FavouritesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
