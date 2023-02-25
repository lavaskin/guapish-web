import { Movie } from '../models/movie.model';

// Manual enrties for every movie we've watched
// Oldest to newest
const MoviesList: Movie[] = [
	{
		// https://youtu.be/6SOHI-9MFzs
		name: 'Godzilla: King of the Monsters',
		year: '2019',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png/220px-Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png'
	},
	{
		// https://youtu.be/cb1ftvItQ-0
		name: 'The Big Lebowski',
		year: '1998',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Biglebowskiposter.jpg/220px-Biglebowskiposter.jpg'
	},
	{
		// https://youtu.be/GDhdrltVhfs
		name: 'Parasite',
		year: '2019',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Parasite_%282019_film%29.png/220px-Parasite_%282019_film%29.png'
	},
	{
		// https://youtu.be/yqXtbjJ0nhQ
		name: 'Pan\'s Labyrinth',
		year: '2006',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg'
	},
	{
		// https://youtu.be/Zdmt-Rxmz-c
		name: 'The Cabin in the Woods',
		year: '2012',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/84/The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg/220px-The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg'
	},
	{
		// https://youtu.be/NDG2ekBbEzg
		name: 'Planet of the Apes',
		year: '1968',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/PlanetoftheapesPoster.jpg/220px-PlanetoftheapesPoster.jpg'
	},
	{
		// https://youtu.be/ufmEw9sKZvM
		name: 'Surf\'s Up',
		year: '2007',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Surfs_upmp.jpg'
	},
	{
		// https://youtu.be/1vLXBf-rm3w
		name: 'Labryinth',
		year: '1986',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Labyrinth_ver2.jpg/220px-Labyrinth_ver2.jpg'
	},
	{
		// https://youtu.be/sd82szmjFtw
		name: 'Avatar: The Way of Water',
		year: '2022',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Avatar_The_Way_of_Water_poster.jpg/220px-Avatar_The_Way_of_Water_poster.jpg'
	},
	{
		// https://youtu.be/sd82szmjFtw
		name: 'The Village',
		year: '2004',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/The_Village_movie.jpg/220px-The_Village_movie.jpg'
	},
	{
		// https://youtu.be/sd82szmjFtw
		name: 'Pumping Iron',
		year: '1977',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Pumping_Iron_movie_poster.jpg/220px-Pumping_Iron_movie_poster.jpg'
	},
	{
		// https://youtu.be/SPJOSy_nQl0
		name: 'The Prince of Egypt',
		year: '1998',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Prince_of_egypt_ver2.jpg/220px-Prince_of_egypt_ver2.jpg'
	},
	{
		// https://youtu.be/SPJOSy_nQl0
		name: 'Straw Dogs',
		year: '1971',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Straw_dogs_movie_poster.jpg/220px-Straw_dogs_movie_poster.jpg'
	},
	{
		// hhttps://youtu.be/3vtgJ1rLI-A
		name: 'House of Wax',
		year: '2005',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/House_Of_Wax_movie_poster.jpg/220px-House_Of_Wax_movie_poster.jpg'
	},
	{
		// https://youtu.be/3vtgJ1rLI-A
		name: 'Bridge to Terabithia',
		year: '2007',
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
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Bridgetoterabithiaposter.jpg/220px-Bridgetoterabithiaposter.jpg'
	},
];

export default MoviesList.reverse();