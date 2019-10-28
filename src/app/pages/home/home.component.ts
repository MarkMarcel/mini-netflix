import { Component, OnInit,HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {MovieSection} from './../../models/movie-section'
import { DbService } from 'src/app/services/db.service';
import { UiService } from 'src/app/services/ui.service';
import * as firebase from 'firebase/app'
import 'firebase/auth';
import * as firebaseUi from 'firebaseui'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieSections:MovieSection[]; 
  show = false;
  constructor(
    private dbService:DbService,
    private uiService:UiService,
    private router:Router) {
      this.onResize();
    }

  ngOnInit() {
    this.movieSections = this.dbService.getSections();
    this.getMovies();

    this.dbService.auth.subscribe(
      (next) => {
        if(next){
          console.log('passed auth');
          this.show = true;
        }else{
            console.log("didn't pass auth");
            this.router.navigate(['/signin']);
        }
      }
    )
    this.dbService.auth.next(false);
    
  }

  @HostListener('window:resize',['$event'])
  onResize(event?){
      this.uiService.setNumberOfMoviesPerScreen();
  }

  getMovies(){
    let movies = this.dbService.getMovies();
    this.movieSections.forEach((movieSection,index) => {
      this.movieSections[index].movies = movies.filter(
        (movie) => {
          return movieSection.id == movie.sectionId;
        }
      );
    });
  }

}
