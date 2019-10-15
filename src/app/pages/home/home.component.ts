import { Component, OnInit } from '@angular/core';
import {MovieSection} from './../../models/movie-section'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieSections:MovieSection[] = [
    {title:"Herh"},
    {title:"Gyai"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
