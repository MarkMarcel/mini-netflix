import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { FavouriteService } from 'src/app/services/favourite.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  movies:Movie[]
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private dbService:DbService) {}

  ngOnInit() {
    this.movies = this.dbService.favourites;
  }

  private handleRouteParam(type:String){
    switch(type){
      case 'favourites':{
        let favourite = new FavouriteService;
        this.movies = favourite.getMovies();
      }
      break;
      case 'search':{
        this.handleSearch(this.route.snapshot.queryParams['searchTerm'])
      }
      break;
      default:{
        let favourite = new FavouriteService;
        this.movies = favourite.getMovies();
      }
    }
  }

  private handleSearch(searchTerm:String){
    console.log(searchTerm)
  }

}
