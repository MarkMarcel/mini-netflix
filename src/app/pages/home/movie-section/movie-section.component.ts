import { Component, OnInit, Input } from '@angular/core';
import {MovieSection} from '../../../models/movie-section'

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {
  @Input() movieSection:MovieSection
  constructor() { }

  ngOnInit() {
  }

}
