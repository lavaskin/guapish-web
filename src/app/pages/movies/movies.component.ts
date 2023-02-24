import { Component, OnInit } from '@angular/core';
import MoviesList from 'src/app/data/movies';
import { Movie } from 'src/app/models/movie.model';
import { RankFilter } from 'src/app/models/rankFilter.enum';
import { SortOrder } from 'src/app/models/sortOrder.enum';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public movies: Movie[] = [...MoviesList];

	public sortOrderEnum = SortOrder;
	public rankFilterEnum = RankFilter;
	public sortOrder: SortOrder = SortOrder.TimeDescending;
	public rankFilter: RankFilter = RankFilter.Overall;

	public showSortOrderDialog: boolean = false;
	public showRanksFilterDialog: boolean = false;
	
	constructor(private utilsService: UtilsService) { }

	ngOnInit(): void { }

	public sort(): void {
		const isOverallFilter = this.rankFilter === RankFilter.Overall;

		switch (this.sortOrder) {
			// Time sorts
			case SortOrder.TimeDescending:
				this.movies = [...MoviesList];
				break;
			case SortOrder.TimeAscending:
				// Slice as to not reverse the original array
				this.movies = [...MoviesList.slice().reverse()];
				break;

			// Rank sorts
			case SortOrder.RankDescending:
				this.movies.sort((a, b) => {
					const aRank = isOverallFilter ?
						this.utilsService.averageRanks(a.ranks.map(rank => rank.rank)) :
						a.ranks.find(rank => rank.name === this.rankFilter)?.rank ?? '';
					const bRank = isOverallFilter ?
						this.utilsService.averageRanks(b.ranks.map(rank => rank.rank)) :
						b.ranks.find(rank => rank.name === this.rankFilter)?.rank ?? '';
					const aScore = this.utilsService.rankToScore(aRank);
					const bScore = this.utilsService.rankToScore(bRank);
					return bScore - aScore;
				});
				break;
			case SortOrder.RankAscending:
				this.movies.sort((a, b) => {
					const aRank = isOverallFilter ?
						this.utilsService.averageRanks(a.ranks.map(rank => rank.rank)) :
						a.ranks.find(rank => rank.name === this.rankFilter)?.rank ?? '';
					const bRank = isOverallFilter ?
						this.utilsService.averageRanks(b.ranks.map(rank => rank.rank)) :
						b.ranks.find(rank => rank.name === this.rankFilter)?.rank ?? '';
					const aScore = this.utilsService.rankToScore(aRank);
					const bScore = this.utilsService.rankToScore(bRank);
					return aScore - bScore;
				});
				break;
		}
	}

	public sortOrderToString(): string {
		switch (this.sortOrder) {
			case SortOrder.TimeDescending:
				return 'Time Desc.';
			case SortOrder.TimeAscending:
				return 'Time Asc.';
			case SortOrder.RankDescending:
				return 'Rank Desc.';
			case SortOrder.RankAscending:
				return 'Rank Asc.';
		}
	}

	public rankFilterToString(): string {
		switch (this.rankFilter) {
			case RankFilter.Overall:
				return 'Overall';
			default:
				return this.rankFilter;
		}
	}
}