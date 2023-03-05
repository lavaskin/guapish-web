import { Link } from "./link.model";

export interface Movie {
	name: string,
	year: number,
	thumbnail: string,
	ranks: UserRank[],
	links: Link[],
}

export interface UserRank {
	name: string,
	rank: string,
}
// ^-- e.g. jackson A+, dillyn F-, etc.