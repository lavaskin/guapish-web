import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { RankerComponent } from './pages/ranker/ranker.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CatsComponent } from './pages/cats/cats.component';

// Partials
import { HeaderComponent } from './components/header/header.component';
import { ScoreBoxComponent } from './components/score-box/score-box.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		RankerComponent,
		MoviesComponent,
		HeaderComponent,
		ScoreBoxComponent,
		DialogComponent,
		MovieComponent,
  		CatsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }