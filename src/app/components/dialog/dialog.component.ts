import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
	@Input() public show!: boolean;
	@Output() public showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	@Input() public title: string = '';
	
	constructor() { }

	ngOnInit(): void { }

	public close(): void {
		this.show = false;
		this.showChange.emit(this.show);
	}
}