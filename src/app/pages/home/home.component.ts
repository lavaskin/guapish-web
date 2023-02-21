import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public links: Link[] = [
		{
			url: 'https://www.youtube.com/@GUAP34',
			iconPath: 'assets/icons/youtube.svg',
			iconAlt: 'YouTube Icon'
		},
		{
			url: 'https://www.patreon.com/GUAPISH',
			iconPath: 'assets/icons/patreon.svg',
			iconAlt: 'Patreon Icon'
		},
		{
			url: 'https://rumble.com/c/c-1693845',
			iconPath: 'assets/icons/rumble.svg',
			iconAlt: 'Rumble Icon'
		},
		{
			url: 'https://twitter.com/FunnyBrosVids',
			iconPath: 'assets/icons/twitter.svg',
			iconAlt: 'Twitter Icon'
		},
		{
			url: 'https://www.twitch.tv/funnybrosindustries',
			iconPath: 'assets/icons/twitch.svg',
			iconAlt: 'Twitch Icon'
		},
	];
	
	constructor() { }

	ngOnInit(): void { }

	openLink(url: string): void {
		window.open(url, '_blank');
	}
}