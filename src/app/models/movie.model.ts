export interface Movie {
	name: string,
	year: number,
	ranks: UserRank[],
	thumbnail: string,
}

export interface UserRank {
	name: string,
	rank: string,
}
// ^-- e.g. jackson A+, dillyn F-, etc.