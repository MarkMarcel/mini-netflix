import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { SearchMoviesService } from 'src/app/services/search-movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  modalRef:BsModalRef
  foundMovies:Movie[];
  constructor(
    private searchMoviesService:SearchMoviesService) { 
     }

  ngOnInit() {}

  hide(){
    this.searchMoviesService.modalRef.hide();
  }

}
