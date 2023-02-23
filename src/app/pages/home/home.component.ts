import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';
import { Member } from 'src/app/models/member.model';

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
	public members: Member[] = [
		{
			name: 'Jackson',
			picture: 'assets/pfps/jackson.png',
			link: 'https://slimes.lavask.in',
			rank: '',
		},
		{
			name: 'Nikko',
			picture: 'assets/pfps/nikko.png',
			link: 'https://www.youtube.com/@tut_bot',
			rank: '',
		},
		{
			name: 'Tanner',
			picture: 'assets/pfps/tanner.png',
			link: 'https://www.youtube.com/@nigubeanchinchug',
			rank: '',
		},
		{
			name: 'Dillyn',
			picture: 'assets/pfps/dillyn.png',
			link: 'https://www.youtube.com/@dantesrevelations3124',
			rank: '',
		},
	]
	
	constructor() { }

	ngOnInit(): void {
		// Randomize the ranks of the members
		let ranks = ['Host', 'Co-Host', 'Special Guest', 'Special Guest'];
		for (let i = this.members.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.members[i], this.members[j]] = [this.members[j], this.members[i]];
		}

		// Assign the ranks to the members
		this.members.forEach((member, index) => {
			member.rank = ranks[index];
		});
	}

	openLink(url: string): void {
		if (url === '') return;
		window.open(url, '_blank');
	}
}