import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilsService {
	public validScores: string[] = ['F-', 'F', 'F+', 'D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+', 'S-', 'S', 'S+'];
	
	constructor() { }

	// Takes in list of ranks (e.g. ['A', 'B', 'C']) and returns the average rank (e.g. 'B')
	public averageRanks(ranks: string[]): string {
		const validRanks = ranks.filter(rank => this.validScores.indexOf(rank) !== -1);
		const scores = validRanks.map(rank => this.validScores.indexOf(rank));
		const average = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
		return this.validScores[average];
	}

	// Takes in list of scores (e.g. [14, 15, 16]) and returns the average rank (e.g. 'B')
	public averageScores(scores: number[]): string {
		const validScores = scores.filter(score => score !== -1);
		const average = Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length);
		return this.validScores[average];
	}

	public rankToScore(rank: string): number {
		return this.validScores.indexOf(rank);
	}
}