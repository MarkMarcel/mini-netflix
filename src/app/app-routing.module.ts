import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {FavouritesComponent} from './pages/favourites/favourites.component'
import {MovieDetailsComponent} from './pages/movie-details/movie-details.component'
import {SigninComponent} from './pages/signin/signin.component'


const routes: Routes = [
  {path:'signin',component:SigninComponent},
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

