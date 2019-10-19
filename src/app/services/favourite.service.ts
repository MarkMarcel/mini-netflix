import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private movies:Movie[] = []
  constructor() { }
  getMovies() {
    return this.movies;
  }
}
