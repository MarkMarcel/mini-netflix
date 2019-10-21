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
      this.numberOfMoviesPerScreen = 4  
  }
}
