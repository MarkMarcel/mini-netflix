import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  numberOfMoviesPerScreen:number;
  constructor() { }

  setNumberOfMoviesPerScreen(){
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(width < 992)
      this.numberOfMoviesPerScreen = 3;
    else 
      this.numberOfMoviesPerScreen = Math.floor(width/344) + 1;   
  }

  resetGridColumns(){
    const lists = document.querySelectorAll('.container');
    lists.forEach((el:HTMLElement) => {
      const listItems = el.querySelectorAll('li');
      const n = el.children.length;
      el.style.setProperty('--total', this.numberOfMoviesPerScreen.toString());
    });
  }
}
