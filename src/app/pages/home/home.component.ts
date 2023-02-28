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
			iconClasses: 'fab fa-youtube',
		},
		{
			url: 'https://www.patreon.com/GUAPISH',
			iconClasses: 'fab fa-patreon',
		},
		{
			url: 'https://twitter.com/FunnyBrosVids',
			iconClasses: 'fab fa-twitter',
		},
		{
			url: 'https://www.twitch.tv/funnybrosindustries',
			iconClasses: 'fab fa-twitch',
		},
		{
			url: 'https://rumble.com/c/c-1693845',
			iconClasses: 'fas fa-bullhorn',
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

	openLink(url: string, member?: Member): void {
		if (url === '') return;

		// If the members name is dillyn, open the mouse video on a 1/20 chance, else open url
		if (member?.name === 'Dillyn' && Math.floor(Math.random() * 20) === 0) {
			const mouseVideo = 'https://youtu.be/DA7wDV4MbNo';
			window.open(mouseVideo, '_blank');
		} else {
			window.open(url, '_blank');
		}
	}
}