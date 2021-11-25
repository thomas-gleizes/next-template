export default interface Anime {
  id: number;
  kitsu_id: string;
  slug: string;
  canonical_title: string;
  titles: string;
  synopsis: string;
  description: string;
  season: "Winter" | "Springs" | "Summer" | "Fall" | string;
  rating: string;
  popularity: number;
  date_begin: Date;
  date_end: Date;
  poster: string;
  cover: string;
  type: "TV" | "Movie" | "OAV" | "ONA" | "OVA" | "special" | "music" | string;
  episode_count: number;
  episode_length: number;
  status: "finished" | "current" | "unreleased" | "tba" | "upcoming";
  createdAt: Date;
}
