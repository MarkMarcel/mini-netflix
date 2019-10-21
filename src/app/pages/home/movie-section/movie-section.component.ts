import { Component, OnInit, Input } from '@angular/core';
import {MovieSection} from '../../../models/movie-section'
import { Movie } from 'src/app/models/movie';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {
  @Input() movieSection:MovieSection
  moviesToMakeVisible:Movie[];
  nextIndex:number
  totalNumberOfMovies:number;
  showRightArrow:Boolean;
  showLeftArrow:Boolean;

  constructor(
    private uiService:UiService) { 

    }

  ngOnInit() {
    this.nextIndex = 0
    let lastIndex = this.nextIndex + this.uiService.numberOfMoviesPerScreen;
    this.moviesToMakeVisible = this.movieSection.movies.slice(this.nextIndex,lastIndex);
    this.setVisibilitiesOfArrows();
  }

  scrollRight(){
    this.nextIndex += 1;
    let lastIndex = this.nextIndex + this.uiService.numberOfMoviesPerScreen;
    this.moviesToMakeVisible = this.movieSection.movies.slice(this.nextIndex,lastIndex);
    this.setVisibilitiesOfArrows();
  }

  scrollLeft(){
    this.nextIndex -= 1;
    let lastIndex = this.nextIndex + this.uiService.numberOfMoviesPerScreen;
    this.moviesToMakeVisible = this.movieSection.movies.slice(this.nextIndex,lastIndex);
    this.setVisibilitiesOfArrows();
  }

  setVisibilitiesOfArrows(){
    this.setLeftArrowVisibility();
    this.setRightArrowVisibility();
  }

  setLeftArrowVisibility(){
    this.showLeftArrow = !(this.nextIndex == 0);
  }

  setRightArrowVisibility(){
    this.showRightArrow = !(
      (this.movieSection.movies.length == this.nextIndex) || 
      (this.movieSection.movies.length < this.uiService.numberOfMoviesPerScreen));
  }
}
