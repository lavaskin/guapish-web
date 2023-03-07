import { Movie } from '../models/movie.model';

// Manual enrties for every movie we've watched
// Oldest to newest
const MoviesList: Movie[] = [
	{
		name: 'Demon Slayer: Mugen Train',
		year: 2020,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg/220px-Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'S-'
			},
			{
				name: 'Dillyn',
				rank: 'S'
			},
			{
				name: 'Nikko',
				rank: 'S-'
			},
			{
				name: 'Tanner',
				rank: 'A'
			},
		],
		links: [
			{
				url: 'https://youtu.be/mRfOv1d-4XA',
				iconClasses: 'fab fa-youtube',
			},
			{
				url: 'https://www.imdb.com/title/tt11032374',
				iconClasses: 'fab fa-imdb',
			},
			{
				url: 'https://www.rottentomatoes.com/m/demon_slayer_kimetsu_no_yaiba_the_movie_mugen_train',
				iconClasses: 'fas fa-tomato',
			}
		],
	},
	{
		name: 'Spider-Man: No Way Home',
		year: 2021,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'B'
			},
			{
				name: 'Dillyn',
				rank: 'A'
			},
			{
				name: 'Nikko',
				rank: 'A+'
			},
			{
				name: 'Tanner',
				rank: 'S'
			},
		],
		links: [
			{
				url: 'https://youtu.be/r9iD7Rr6g4s',
				iconClasses: 'fab fa-youtube',
			},
			{
				url: 'https://www.imdb.com/title/tt10872600',
				iconClasses: 'fab fa-imdb',
			},
			{
				url: 'https://www.rottentomatoes.com/m/spider_man_no_way_home',
				iconClasses: 'fas fa-tomato',
			}
		],
	},
	{
		name: 'Doctor Strange in the Multiverse of Madness',
		year: 2022,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'D'
			},
			{
				name: 'Dillyn',
				rank: 'B+'
			},
			{
				name: 'Nikko',
				rank: 'C-'
			},
			{
				name: 'Tanner',
				rank: 'C-'
			},
		],
		links: [
			{
				url: 'https://youtu.be/YL5AnxgeUo4',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Jujutsu Kaisen 0',
		year: 2020,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png/220px-Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png',
		ranks: [
			{
				name: 'Jackson',
				rank: 'C+'
			},
			{
				name: 'Dillyn',
				rank: 'A+'
			},
			{
				name: 'Nikko',
				rank: 'B-'
			},
			{
				name: 'Tanner',
				rank: 'A'
			},
		],
		links: [
			{
				url: 'https://youtu.be/Oi9KB9Isuhk',
				iconClasses: 'fab fa-youtube',
			},
			{
				url: 'https://www.imdb.com/title/tt14331144',
				iconClasses: 'fab fa-imdb',
			},
			{
				url: 'https://www.rottentomatoes.com/m/jujutsu_kaisen_0_the_movie',
				iconClasses: 'fas fa-tomato',
			}
		],
	},
	{
		name: 'Godzilla: King of the Monsters',
		year: 2019,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png/220px-Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png',
		ranks: [
			{
				name: 'Jackson',
				rank: 'B-'
			},
			{
				name: 'Dillyn',
				rank: 'S'
			},
			{
				name: 'Nikko',
				rank: 'C-'
			},
			{
				name: 'Tanner',
				rank: 'B+'
			},
		],
		links: [
			{
				url: 'https://youtu.be/6SOHI-9MFzs',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'The Big Lebowski',
		year: 1998,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Biglebowskiposter.jpg/220px-Biglebowskiposter.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'A'
			},
			{
				name: 'Dillyn',
				rank: 'B-'
			},
			{
				name: 'Nikko',
				rank: 'A'
			},
			{
				name: 'Tanner',
				rank: 'A+'
			},
		],
		links: [
			{ 
				url: 'https://youtu.be/cb1ftvItQ-0',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Parasite',
		year: 2019,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Parasite_%282019_film%29.png/220px-Parasite_%282019_film%29.png',
		ranks: [
			{
				name: 'Jackson',
				rank: 'S'
			},
			{
				name: 'Dillyn',
				rank: 'A-'
			},
			{
				name: 'Nikko',
				rank: 'A'
			},
			{
				name: 'Tanner',
				rank: 'A'
			},
		],
		links: [
			{
				url: 'https://youtu.be/GDhdrltVhfs',
				iconClasses: 'fab fa-youtube',
			},
			{
				url: 'https://www.imdb.com/title/tt6751668',
				iconClasses: 'fab fa-imdb',
			},
			{
				url: 'https://www.rottentomatoes.com/m/parasite_2019',
				iconClasses: 'fas fa-tomato',
			},
		],
	},
	{
		name: 'Pan\'s Labyrinth',
		year: 2006,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'B'
			},
			{
				name: 'Dillyn',
				rank: 'A'
			},
			{
				name: 'Nikko',
				rank: 'B'
			},
			{
				name: 'Tanner',
				rank: 'B'
			},
		],
		links: [
			{
				url: 'https://youtu.be/yqXtbjJ0nhQ',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'The Cabin in the Woods',
		year: 2012,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/84/The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg/220px-The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'B+'
			},
			{
				name: 'Dillyn',
				rank: 'B-'
			},
			{
				name: 'Nikko',
				rank: 'A-'
			},
			{
				name: 'Tanner',
				rank: 'B+'
			},
		],
		links: [
			{
				url: 'https://youtu.be/Zdmt-Rxmz-c',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Planet of the Apes',
		year: 1968,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/PlanetoftheapesPoster.jpg/220px-PlanetoftheapesPoster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'B+'
			},
			{
				name: 'Dillyn',
				rank: 'A'
			},
			{
				name: 'Nikko',
				rank: 'B'
			},
			{
				name: 'Tanner',
				rank: 'S'
			},
		],
		links: [
			{
				url: 'https://youtu.be/NDG2ekBbEzg',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Surf\'s Up',
		year: 2007,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Surfs_upmp.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'C+'
			},
			{
				name: 'Dillyn',
				rank: 'S'
			},
			{
				name: 'Nikko',
				rank: 'C-'
			},
			{
				name: 'Tanner',
				rank: 'C+'
			},
		],
		links: [
			{
				url: 'https://youtu.be/ufmEw9sKZvM',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Labryinth',
		year: 1986,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Labyrinth_ver2.jpg/220px-Labyrinth_ver2.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'D+'
			},
			{
				name: 'Dillyn',
				rank: 'S'
			},
			{
				name: 'Nikko',
				rank: 'D+'
			},
			{
				name: 'Tanner',
				rank: 'C+'
			},
		],
		links: [
			{
				url: 'https://youtu.be/1vLXBf-rm3w',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Avatar: The Way of Water',
		year: 2022,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Avatar_The_Way_of_Water_poster.jpg/220px-Avatar_The_Way_of_Water_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'C+'
			},
			{
				name: 'Dillyn',
				rank: 'A+'
			},
			{
				name: 'Nikko',
				rank: 'B+'
			},
			{
				name: 'Tanner',
				rank: 'A+'
			},
		],
		links: [
			{
				url: 'https://youtu.be/sd82szmjFtw',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'The Village',
		year: 2004,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/The_Village_movie.jpg/220px-The_Village_movie.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'D'
			},
			{
				name: 'Dillyn',
				rank: 'D'
			},
			{
				name: 'Nikko',
				rank: 'C+'
			},
			{
				name: 'Tanner',
				rank: 'D'
			},
		],
		links: [
			{
				url: 'https://youtu.be/sd82szmjFtw',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Pumping Iron',
		year: 1977,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Pumping_Iron_movie_poster.jpg/220px-Pumping_Iron_movie_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'D-'
			},
			{
				name: 'Dillyn',
				rank: 'D+'
			},
			{
				name: 'Nikko',
				rank: 'D-'
			},
			{
				name: 'Tanner',
				rank: 'A'
			},
		],
		links: [
			{
				url: 'https://youtu.be/sd82szmjFtw',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'The Prince of Egypt',
		year: 1998,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Prince_of_egypt_ver2.jpg/220px-Prince_of_egypt_ver2.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'A+'
			},
			{
				name: 'Dillyn',
				rank: 'A-'
			},
			{
				name: 'Nikko',
				rank: 'S+'
			},
			{
				name: 'Tanner',
				rank: 'S'
			},
		],
		links: [
			{
				url: 'https://youtu.be/SPJOSy_nQl0',
				iconClasses: 'fab fa-youtube',
			},
			{
				url: 'https://www.imdb.com/title/tt0120794',
				iconClasses: 'fab fa-imdb',
			},
			{
				url: 'https://www.rottentomatoes.com/m/prince_of_egypt',
				iconClasses: 'fas fa-tomato',
			},
		],
	},
	{
		name: 'Straw Dogs',
		year: 1971,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Straw_dogs_movie_poster.jpg/220px-Straw_dogs_movie_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'D'
			},
			{
				name: 'Dillyn',
				rank: 'F+'
			},
			{
				name: 'Nikko',
				rank: 'D'
			},
			{
				name: 'Tanner',
				rank: 'F'
			},
		],
		links: [
			{
				url: 'https://youtu.be/SPJOSy_nQl0',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'House of Wax',
		year: 2005,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/House_Of_Wax_movie_poster.jpg/220px-House_Of_Wax_movie_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'B'
			},
			{
				name: 'Dillyn',
				rank: 'F-'
			},
			{
				name: 'Nikko',
				rank: 'C-'
			},
			{
				name: 'Tanner',
				rank: 'A-'
			},
		],
		links: [
			{
				url: 'https://youtu.be/3vtgJ1rLI-A',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Bridge to Terabithia',
		year: 2007,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Bridgetoterabithiaposter.jpg/220px-Bridgetoterabithiaposter.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'C-'
			},
			{
				name: 'Dillyn',
				rank: 'A+'
			},
			{
				name: 'Nikko',
				rank: 'C'
			},
			{
				name: 'Tanner',
				rank: 'B-'
			},
		],
		links: [
			{
				url: 'https://youtu.be/3vtgJ1rLI-A',
				iconClasses: 'fab fa-youtube',
			},
		],
	},
	{
		name: 'Ferris Bueller\'s Day Off',
		year: 1986,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Ferris_Bueller%27s_Day_Off.jpg/220px-Ferris_Bueller%27s_Day_Off.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'A'
			},
			{
				name: 'Dillyn',
				rank: 'A'
			},
			{
				name: 'Nikko',
				rank: 'B-'
			},
			{
				name: 'Tanner',
				rank: 'A+'
			},
		],
		links: [
			{
				url: 'https://youtu.be/biu8sZHsqUU',
				iconClasses: 'fab fa-youtube',
			},
			{
				url: 'https://www.imdb.com/title/tt0091042',
				iconClasses: 'fab fa-imdb',
			},
		],
	},
	{
		name: 'Take Me Home Tonight',
		year: 2011,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Take_Me_Home_Tonight_Poster.jpg/220px-Take_Me_Home_Tonight_Poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'C'
			},
			{
				name: 'Dillyn',
				rank: 'B-'
			},
			{
				name: 'Nikko',
				rank: 'C+'
			},
			{
				name: 'Tanner',
				rank: 'D'
			},
		],
		links: [
			{
				url :'https://youtu.be/biu8sZHsqUU',
				iconClasses: 'fab fa-youtube',
			},
			{
				url: 'https://www.imdb.com/title/tt0810922',
				iconClasses: 'fab fa-imdb',
			},
		],
	},
	{
		name: 'Avatar',
		year: 2009,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Avatar_%282009_film%29_poster.jpg/220px-Avatar_%282009_film%29_poster.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'B-'
			},
			{
				name: 'Dillyn',
				rank: 'S'
			},
			{
				name: 'Nikko',
				rank: 'B-'
			},
			{
				name: 'Tanner',
				rank: 'B'
			},
		],
		links: [
			// {
			// 	url :'',
			// 	iconClasses: 'fab fa-youtube',
			// },
			{
				url: 'https://www.imdb.com/title/tt0499549',
				iconClasses: 'fab fa-imdb',
			},
			{
				url: 'https://www.rottentomatoes.com/m/avatar',
				iconClasses: 'fas fa-tomato',
			}
		],
	},
	{
		name: 'Waxwork',
		year: 1988,
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Waxworkposter.jpg/220px-Waxworkposter.jpg',
		ranks: [
			{
				name: 'Jackson',
				rank: 'A+'
			},
			{
				name: 'Dillyn',
				rank: 'C-'
			},
			{
				name: 'Nikko',
				rank: 'A'
			},
			{
				name: 'Tanner',
				rank: 'A-'
			},
		],
		links: [
			// {
			// 	url :'',
			// 	iconClasses: 'fab fa-youtube',
			// },
			{
				url: 'https://www.imdb.com/title/tt0096426',
				iconClasses: 'fab fa-imdb',
			},
			{
				url: 'https://www.rottentomatoes.com/m/waxwork',
				iconClasses: 'fas fa-tomato',
			}
		],
	},
	// {
	// 	name: 'Joker',
	// 	year: 2019,
	// 	thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg',
	// 	ranks: [
	// 		{
	// 			name: 'Jackson',
	// 			rank: ''
	// 		},
	// 		{
	// 			name: 'Dillyn',
	// 			rank: ''
	// 		},
	// 		{
	// 			name: 'Nikko',
	// 			rank: ''
	// 		},
	// 		{
	// 			name: 'Tanner',
	// 			rank: ''
	// 		},
	// 	],
	// 	links: [
	// 		// {
	// 		// 	url :'',
	// 		// 	iconClasses: 'fab fa-youtube',
	// 		// },
	// 		{
	// 			url: 'https://www.imdb.com/title/tt7286456',
	// 			iconClasses: 'fab fa-imdb',
	// 		},
	// 		{
	// 			url: 'https://www.rottentomatoes.com/m/joker_2019',
	// 			iconClasses: 'fas fa-tomato',
	// 		}
	// 	],
	// },
	// {
	// 	name: 'Invasion of the Body Snatchers',
	// 	year: 1956,
	// 	thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Invasion_of_the_Body_Snatchers_%281956_poster%29.jpg/220px-Invasion_of_the_Body_Snatchers_%281956_poster%29.jpg',
	// 	ranks: [
	// 		{
	// 			name: 'Jackson',
	// 			rank: ''
	// 		},
	// 		{
	// 			name: 'Dillyn',
	// 			rank: ''
	// 		},
	// 		{
	// 			name: 'Nikko',
	// 			rank: ''
	// 		},
	// 		{
	// 			name: 'Tanner',
	// 			rank: ''
	// 		},
	// 	],
	// 	links: [
	// 		// {
	// 		// 	url :'',
	// 		// 	iconClasses: 'fab fa-youtube',
	// 		// },
	// 		{
	// 			url: 'https://www.imdb.com/title/tt0049366',
	// 			iconClasses: 'fab fa-imdb',
	// 		},
	// 		{
	// 			url: 'https://www.rottentomatoes.com/m/1010678-invasion_of_the_body_snatchers',
	// 			iconClasses: 'fas fa-tomato',
	// 		}
	// 	],
	// },
];

export default MoviesList.reverse();