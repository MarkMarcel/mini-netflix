import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieSectionComponent } from './pages/home/movie-section/movie-section.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { MovieComponent } from './ui/movie/movie.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchResultsComponent } from './ui/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSectionComponent,
    MovieDetailsComponent,
    FavouritesComponent,
    MovieComponent,
    TopNavComponent,
    SearchResultsComponent
  ],
  entryComponents:[
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
