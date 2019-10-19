import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {FavouritesComponent} from './pages/favourites/favourites.component'
import {MovieDetailsComponent} from './pages/movie-details/movie-details.component'


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'favourites',component:FavouritesComponent},
  {path:'movie-details/:id',component:MovieDetailsComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
