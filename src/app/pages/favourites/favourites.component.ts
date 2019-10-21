import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouriteMovies:Movie[]
  constructor(
    private dbService:DbService
    ) {

    }

  ngOnInit() {
    this.favouriteMovies = this.dbService.getFavourites();
  }

}
