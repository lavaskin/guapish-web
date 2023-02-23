import { Component, OnInit } from '@angular/core';
import MoviesList from 'src/app/data/movies';
import { Movie } from 'src/app/models/movie.model';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	// To show
	public movies: Movie[] = MoviesList;
	
	constructor() { }

	ngOnInit(): void { }
}