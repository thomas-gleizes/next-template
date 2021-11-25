import { Anime as AnimeModel } from "@prisma/client";
import { Anime, Resources } from "../types";

class AnimesResources implements Resources<AnimeModel, Anime> {
  public one(resource: AnimeModel): Anime {
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
    } = resource;

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

  public many(resources: Array<AnimeModel>): Array<Anime> {
    return resources.map(this.one);
  }
}

export default new AnimesResources();
