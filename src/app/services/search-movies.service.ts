import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SearchResultsComponent } from '../ui/search-results/search-results.component';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  private foundMovies:Movie[]
  modalRef:BsModalRef;
  constructor(
    private dbService:DbService,
    private bsModalService:BsModalService) { 
  
    }

  findMovies(searchTerm:String){
      let foundMovies:Movie[] = []
      this.dbService.movies.forEach(movie => {
        if(movie.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
            foundMovies.unshift(movie);
      }) 

      this.foundMovies = foundMovies;
      this.openModal();
  }  

  openModal(){
    let initialState = {
      foundMovies:this.foundMovies
    }
    this.modalRef = this.bsModalService.show(SearchResultsComponent,{initialState});
  }
}
