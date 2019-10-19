import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:Movie;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private dbService:DbService
  ) { 

  }

  ngOnInit() {
    this.getMovie(this.route.snapshot.params['id'])
  }

  private getMovie(id:Number){
    this.movie = this.dbService.movies
                    .find( 
                      movie => movie.sectionId == id
                      );
    
    console.log(this.movie);                 
  }

}
