import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { DbService } from 'src/app/services/db.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:Movie;
  movieObservable:Observable<Movie>;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private dbService:DbService
  ) { 

  }

  ngOnInit() {
    this.movieObservable = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        this.getMovie(+params.get('id')))
    );

    this.movieObservable.subscribe(movie => this.movie = movie)
  }

  private getMovie(id:number) : Movie{
    let movie = this.dbService.movies
                    .find( 
                      movie => movie.id == id
                      );

    return movie              
  }

}
