import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { RankerComponent } from './pages/ranker/ranker.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';

// Partials
// ...

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		RankerComponent,
		MoviesComponent,
  HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }