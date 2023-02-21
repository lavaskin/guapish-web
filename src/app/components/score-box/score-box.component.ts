import { Component, ViewChild, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-score-box',
	templateUrl: './score-box.component.html',
	styleUrls: ['./score-box.component.css']
})
export class ScoreBoxComponent implements OnInit {
	@ViewChild('plusButton') plusButton!: ElementRef;
	@ViewChild('minusButton') minusButton!: ElementRef;

	@Output() rankOutput = new EventEmitter<string>();

	public opinion: string = ''; // +, '' or -
	public rank: string = ''; // F, D, C, B, A, S
	
	constructor() { }

	ngOnInit(): void { }

	public plus(): void {
		this.opinion = this.opinion === 'plus' ? '' : 'plus';

		// Set active styles
		this.plusButton.nativeElement.style.marginBottom = this.opinion === 'plus' ? '0' : '0.5rem';
		this.plusButton.nativeElement.style.paddingBottom = this.opinion === 'plus' ? '0.5rem' : '0';
		this.plusButton.nativeElement.style.borderRadius = this.opinion === 'plus' ? '0.5rem 0.5rem 0 0' : '0.25rem';
		
		// Reset the other button
		this.minusButton.nativeElement.style.marginTop = '0.5rem';
		this.minusButton.nativeElement.style.paddingTop = '0';
		this.minusButton.nativeElement.style.borderRadius = '0.25rem';

		this.emit();
	}

	public minus(): void {
		this.opinion = this.opinion === 'minus' ? '' : 'minus';

		// Set active styles
		this.minusButton.nativeElement.style.marginTop = this.opinion === 'minus' ? '0' : '0.5rem';
		this.minusButton.nativeElement.style.paddingTop = this.opinion === 'minus' ? '0.5rem' : '0';
		this.minusButton.nativeElement.style.borderRadius = this.opinion === 'minus' ? '0 0 0.5rem 0.5rem' : '0.25rem';
		
		// Reset the other button
		this.plusButton.nativeElement.style.marginBottom = '0.5rem';
		this.plusButton.nativeElement.style.paddingBottom = '0';
		this.plusButton.nativeElement.style.borderRadius = '0.25rem';

		this.emit();
	}

	emit(): void {
		const opinion = this.opinion === 'plus' ? '+' : this.opinion === 'minus' ? '-' : '';
		this.rankOutput.emit(`${this.rank.toUpperCase()}${opinion}`);
	}
}