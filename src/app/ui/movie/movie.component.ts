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
    this.dbService.favourites.unshift(this.movie);
  }

  unlikeMovie(){
    this.movie.isLiked = false;
    let index = this.dbService.favourites.indexOf(this.movie)
    if(index > -1)
      this.dbService.favourites.splice(0,1);
  }
}
