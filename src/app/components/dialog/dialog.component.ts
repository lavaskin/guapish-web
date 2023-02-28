import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
	@Input() public show!: boolean;
	@Output() public showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	@Input() private allowBackgroundClose: boolean = true;
	@Input() public title: string = '';

	@ViewChild('background') public background!: ElementRef;
	
	constructor() { }

	ngOnInit(): void { }

	public close(event?: MouseEvent): void {
		// Determine if the click was outside the dialog
		if (event !== undefined) {
			// Only close if target was background
			if (event?.target === this.background.nativeElement && this.allowBackgroundClose) {
				this.show = false;
			}
		} else {
			this.show = false;
		}

		this.showChange.emit(this.show);
	}
}