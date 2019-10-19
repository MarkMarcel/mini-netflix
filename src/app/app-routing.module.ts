import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {FavouritesComponent} from './pages/favourites/favourites.component'
import { FavouriteService } from './services/favourite.service';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'favourites',component:FavouritesComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[FavouriteService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
