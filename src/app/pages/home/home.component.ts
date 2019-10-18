import { Component, OnInit } from '@angular/core';
import {MovieSection} from './../../models/movie-section'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieSections:MovieSection[] = [
    {title:"Herh",movies:[{title:"Lil way",productionYear:"2012",imageSrc:"https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg"}]},
    {title:"Gyai",movies:[{title:"Lil way",productionYear:"2012",imageSrc:"https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg"}]}
  ]
  constructor() { }

  ngOnInit() {
  }

}
