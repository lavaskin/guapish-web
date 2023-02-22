import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	@Input() public movie!: Movie;
	public rank!: string;

	public showDialog = false;
	
	constructor(private utilsService: UtilsService) { }

	ngOnInit(): void {
		this.rank = this.utilsService.averageRanks(this.movie.ranks.map(rank => rank.rank));

		// Sort ranks by rank
		this.movie.ranks.sort((a, b) => {
			const aScore = this.utilsService.validScores.indexOf(a.rank);
			const bScore = this.utilsService.validScores.indexOf(b.rank);
			return bScore - aScore;
		});
	}
}