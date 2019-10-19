import { Component, OnInit } from '@angular/core';
import { SearchMoviesService } from 'src/app/services/search-movies.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  searchTerm:String ="";

  constructor(
    private searchMoviesService:SearchMoviesService) { 

    }

  ngOnInit() {
  }

  searchMovies(searchTerm){
    this.searchMoviesService.findMovies(searchTerm);
  }

}
