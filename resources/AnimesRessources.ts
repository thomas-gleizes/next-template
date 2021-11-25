import { Anime, Ressources } from "../types";

class AnimesRessources implements Ressources<any, Anime> {
  public one(resources: any): Anime {
    const {
      canonical_title,
      titles,
      cover,
      poster,
      rating_rank,
      rating_average,
      popularity_count,
      popularity_rank,
      episode_count,
      episode_length,
      created_at,
      ...rest
    } = resources;

    return {
      canonicalTitle: canonical_title,
      titles: JSON.parse(titles),
      cover: JSON.parse(cover),
      poster: JSON.parse(poster),
      rating: {
        average: rating_average,
        rank: rating_rank,
      },
      popularity: {
        count: popularity_count,
        rank: popularity_rank,
      },
      episode: {
        length: episode_length,
        count: episode_count,
      },
      ...rest,
    };
  }

  public many(resources: Array<any>): Array<Anime> {
    return resources.map(this.one);
  }
}

export default new AnimesRessources();
