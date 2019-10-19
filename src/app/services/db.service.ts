import { Injectable } from '@angular/core';
import { MovieSection } from '../models/movie-section';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  movieSections:MovieSection[] = [
    {id:0, title:"Action", movies:[]},
    {id:1, title:"Romance", movies:[]}
  ];

  movies:Movie[] = [
    {sectionId:0, title:"Thor",productionYear:"2015", imageSrc:"https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg", isLiked:false},
    {sectionId:0, title:"Mantera",productionYear:"2014", imageSrc:"https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg", isLiked:false},
    {sectionId:0, title:"Liquidation",productionYear:"2012", imageSrc:"https://i.ytimg.com/vi/AjvdnzWfuDU/maxresdefault.jpg", isLiked:false},
    {sectionId:0, title:"John Wick",productionYear:"2019", imageSrc:"https://cdn.onebauer.media/one/empire-images/features/58ac2a61f73c215f07c78651/john-wick-2-header-1.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg", isLiked:false},
    {sectionId:0, title:"Hunter Killer",productionYear:"2012", imageSrc:"https://www.indiewire.com/wp-content/uploads/2018/10/hunterkiller.jpg?w=780", isLiked:false},
    {sectionId:0, title:"Mad Max",productionYear:"2017", imageSrc:"http://www.tasteofcinema.com/wp-content/uploads/2016/04/best-action-movie-sequels.jpg", isLiked:false}
  ];

  favourites:Movie[] = [];

  constructor() {
  
   }
}
