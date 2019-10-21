import { Component, OnInit, Input} from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie:Movie;
  constructor(private dbService:DbService) { }

  ngOnInit() {
  }

  likeMovie(){
    this.movie.isLiked = true;
    this.dbService.addToFavourites(this.movie);
  }

  unlikeMovie(){
    this.movie.isLiked = false;
    this.dbService.removeFromFavourites(this.movie);
  }
}
