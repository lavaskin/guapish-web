import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { RankFilter } from 'src/app/models/rankFilter.enum';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	@Input() public movie!: Movie;
	public rank!: string;
	public overallRank!: string;

	@Input() public rankFilter: RankFilter = RankFilter.Overall;

	public showDialog = false;
	
	constructor(private utilsService: UtilsService) { }

	ngOnInit(): void {
		// For the rank in the popup dialog
		this.overallRank = this.utilsService.averageRanks(this.movie.ranks.map(rank => rank.rank));

		// Filter displayed rank
		this.filterRank();

		// Sort ranks by rank
		this.movie.ranks.sort((a, b) => {
			const aScore = this.utilsService.rankToScore(a.rank);
			const bScore = this.utilsService.rankToScore(b.rank);
			return bScore - aScore;
		});
	}

	ngOnChanges(): void {
		this.filterRank();
	}

	private filterRank(): void {
		// Set displayed rank based on sent filter
		switch (this.rankFilter) {
			case RankFilter.Overall:
				this.rank = this.overallRank;
				break;
			
			default:
				this.rank = this.movie.ranks.find(rank => rank.name === this.rankFilter)?.rank ?? '';
		}
	}
}