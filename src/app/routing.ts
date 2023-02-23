import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './pages/cats/cats.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RankerComponent } from './pages/ranker/ranker.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'movies', component: MoviesComponent },
	{ path: 'ranker', component: RankerComponent },
	{ path: 'cats', component: CatsComponent},
	{ path: '**', component: HomeComponent },
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }