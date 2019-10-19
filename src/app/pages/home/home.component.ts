import { Component, OnInit,HostListener} from '@angular/core';
import {MovieSection} from './../../models/movie-section'
import { DbService } from 'src/app/services/db.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieSections:MovieSection[]; 
  constructor(
    private dbService:DbService,
    private uiService:UiService) {
      this.onResize();
    }

  ngOnInit() {
    this.movieSections = this.dbService.movieSections;
    this.getMovies();
  }

  @HostListener('window:resize',['$event'])
  onResize(event?){
      this.uiService.setNumberOfMoviesPerScreen();
  }

  getMovies(){
    this.movieSections.forEach((movieSection,index) => {
      this.movieSections[index].movies = this.dbService.movies.filter(
        (movie) => {
          return movieSection.id == movie.sectionId;
        }
      );
    });
  }

}
