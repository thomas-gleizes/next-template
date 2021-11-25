export interface Images {
  tiny?: string;
  small?: string;
  medium?: string;
  large?: string;
  original?: string;
}

export interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

export interface Rating {
  average: number;
  rank: number;
}

export interface Popularity {
  count: number;
  rank: number;
}

export interface Episode {
  length: number;
  count: number;
}

export default interface Anime {
  id: number;
  kitsu_id: string;
  slug: string;
  canonicalTitle: string;
  titles: Titles;
  synopsis: string;
  description: string;
  season: "Winter" | "Springs" | "Summer" | "Fall" | string;
  season_year: string;
  rating: Rating;
  popularity: Popularity;
  date_begin: Date;
  date_end: Date;
  poster: Images;
  cover: Images;
  episode: Episode;
  type: "TV" | "Movie" | "OAV" | "ONA" | "OVA" | "special" | "music" | string;
  status: "finished" | "current" | "unreleased" | "tba" | "upcoming";
  createdAt: Date;
}
