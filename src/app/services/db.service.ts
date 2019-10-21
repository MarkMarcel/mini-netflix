import { Injectable } from '@angular/core';
import { MovieSection } from '../models/movie-section';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  movieSections:MovieSection[] = [
    {id:0, title:"Action", movies:[]},
    {id:1, title:"Romance", movies:[]},
    {id:2, title:"Horror", movies:[]}
  ];

  movies:Movie[] = [
    {id:0, sectionId:0, title:"Thor",productionYear:"2015", imageSrc:"https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg", isLiked:false},
    {id:1, sectionId:0, title:"Mantera",productionYear:"2014", imageSrc:"https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg", isLiked:false},
    {id:2, sectionId:0, title:"Liquidation",productionYear:"2012", imageSrc:"https://i.ytimg.com/vi/AjvdnzWfuDU/maxresdefault.jpg", isLiked:false},
    {id:3, sectionId:0, title:"John Wick",productionYear:"2019", imageSrc:"https://cdn.onebauer.media/one/empire-images/features/58ac2a61f73c215f07c78651/john-wick-2-header-1.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg", isLiked:false},
    {id:4, sectionId:0, title:"Hunter Killer",productionYear:"2012", imageSrc:"https://www.indiewire.com/wp-content/uploads/2018/10/hunterkiller.jpg?w=780", isLiked:false},
    {id:5, sectionId:0, title:"Mad Max",productionYear:"2017", imageSrc:"http://www.tasteofcinema.com/wp-content/uploads/2016/04/best-action-movie-sequels.jpg", isLiked:false},
    {id:6, sectionId:1, title:"After",productionYear:"2019", imageSrc:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-best-romance-movies-2019-after-1549663026.jpg?crop=1xw:1xh;center,top&resize=480:*", isLiked:false},
    {id:7, sectionId:1, title:"Me Before You",productionYear:"2016", imageSrc:"https://m.media-amazon.com/images/M/MV5BMzUwYTZhYTYtYTQ4MC00YTAwLTg5NmEtZWUxODQ5ZTY2ZWQxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg", isLiked:false},
    {id:6, sectionId:1, title:"High Strung",productionYear:"2019", imageSrc:"http://www.gscmovies.com.my/wp-content/uploads/2016/05/Romantic-movies-High-Strung-1024x610.jpg", isLiked:false},
    {id:7, sectionId:1, title:"Crazy Rich Asians",productionYear:"2020", imageSrc:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/17/1524493556-crazyrichasians.jpg?crop=1.00xw:0.340xh;0,0.198xh&resize=1200:*", isLiked:false},
    {id:7, sectionId:2, title:"The Curse of La Llorona",productionYear:"2016", imageSrc:"https://i.ytimg.com/vi/OJfhaiKBFvw/maxresdefault.jpg", isLiked:false},
    {id:6, sectionId:2, title:"Gyemerk",productionYear:"2019", imageSrc:"https://filmsomnia.hu/wp-content/uploads/2019/05/C2A82D03-0B38-471E-B40D-04F92664E0DF-750x400.jpeg", isLiked:false},
    {id:7, sectionId:2, title:"Annabel",productionYear:"2020", imageSrc:"https://i.ytimg.com/vi/A1n7gSXgYkA/hqdefault.jpg", isLiked:false}
  ];

  favourites:Movie[] = [];

   initialise(){
    if(!localStorage.sections)
      localStorage.setItem('sections',JSON.stringify(this.movieSections));

    if(!localStorage.movies)
      localStorage.setItem('movies',JSON.stringify(this.movies));

    if(!localStorage.favourites)
      localStorage.setItem('favourites',JSON.stringify(this.favourites));
   }

   getSections() : MovieSection[]{
      let movieSections:MovieSection[] = JSON.parse(localStorage.getItem('sections'));
      return movieSections;
   }

   getMovies() : Movie[]{
    let movies:Movie[] = JSON.parse(localStorage.getItem('movies'));
    return movies;
   }

   updateMovies(movie:Movie){
      let movies = this.getMovies();
      let index = this.getMovieIndex(movie,movies);
      movies[index] = movie;
      localStorage.setItem('movies',JSON.stringify(movies));
   }

   addToFavourites(movie:Movie){
      let favouriteMovies = this.getFavourites();
      favouriteMovies.unshift(movie)
      this.saveFavourites(favouriteMovies);
      this.updateMovies(movie);
   }

   removeFromFavourites(movie:Movie){
    let favouriteMovies = this.getFavourites();
    let index = this.getMovieIndex(movie,favouriteMovies);
    if(index > -1)
      favouriteMovies.splice(index,index);
    this.saveFavourites(favouriteMovies);  
    this.updateMovies(movie);
   }

   getFavourites():Movie[]{
     let favouriteMovies:Movie[] = JSON.parse(localStorage.getItem('favourites'));
     return favouriteMovies;
   }

   saveFavourites(favouriteMovies:Movie[]){
    localStorage.setItem('favourites',JSON.stringify(favouriteMovies));
   }

   getMovieIndex(movie:Movie, moviesArray:Movie[]):number{
      let oldMovie = moviesArray.filter(
            paramMovie => movie.id == paramMovie.id
      )
      return moviesArray.indexOf(oldMovie[0]);
   }

}
