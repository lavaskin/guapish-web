export interface Movie {
	name: string,
	year: string,
	rank: string,
	scores: UserRank[],
}

export interface UserRank {
	user: string,
	rank: string,
}
// ^-- e.g. jackson A+, dillyn F-, etc.