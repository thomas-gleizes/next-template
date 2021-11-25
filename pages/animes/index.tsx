import React from "react";
import { GetStaticProps, NextPage } from "next";

import { Anime, CustomResponseData } from "../../types";
import appAxios from "../../lib/appAxios";

interface Props extends CustomResponseData {
  animes: Array<Anime>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await appAxios.get<Props>("animes");

  return { props: data, revalidate: 30 };
};

const ExploreAnimes: NextPage<Props> = ({ animes }) => {
  return (
    <ul>
      {animes.map((anime: Anime, index: number) => (
        <li key={index}>
          {anime.id} - {anime.canonical_title}
        </li>
      ))}
    </ul>
  );
};

export default ExploreAnimes;
