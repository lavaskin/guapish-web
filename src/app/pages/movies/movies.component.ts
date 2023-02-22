import { Component, OnInit } from '@angular/core';
import MoviesList from 'src/app/data/movies';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public movies = MoviesList;
	
	constructor() { }

	ngOnInit(): void { }
}