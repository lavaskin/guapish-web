import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ranker',
	templateUrl: './ranker.component.html',
	styleUrls: ['./ranker.component.css']
})
export class RankerComponent implements OnInit {
	public scores: number[] = [-1, -1, -1, -1];
	public displayedRank: string = '';

	private validScores = ['F-', 'F', 'F+', 'D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+', 'S-', 'S', 'S+'];
	private scoreValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

	constructor() { }

	ngOnInit(): void { }

	public updateScores(index: number, score: string): void {
		if (!this.validateScore(score)) return;
		this.scores[index] = this.getScoreValue(score);

		const validScores = this.scores.filter(score => score !== -1);
		const average = Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length);
		this.displayedRank = this.validScores[average];
	}

	private validateScore(score: string): boolean {
		return this.validScores.indexOf(score) !== -1;
	}

	private getScoreValue(score: string): number {
		return this.scoreValues[this.validScores.indexOf(score)];
	}
}