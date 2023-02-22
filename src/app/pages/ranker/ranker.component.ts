import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
	selector: 'app-ranker',
	templateUrl: './ranker.component.html',
	styleUrls: ['./ranker.component.css']
})
export class RankerComponent implements OnInit {
	public scores: number[] = [-1, -1, -1, -1];
	public displayedRank: string = '';

	public showDialog: boolean = false;

	constructor(private utilsService: UtilsService) { }

	ngOnInit(): void { }

	public updateScores(index: number, score: string): void {
		if (!this.validateScore(score)) return;
		
		this.scores[index] = this.getScoreValue(score);
		this.displayedRank = this.utilsService.averageScores(this.scores);
	}

	public reset() {
		this.scores = [-1, -1, -1, -1];
		this.displayedRank = '';
	}

	private validateScore(score: string): boolean {
		return this.utilsService.validScores.indexOf(score) !== -1;
	}

	private getScoreValue(score: string): number {
		return this.utilsService.validScores.indexOf(score);
	}
}