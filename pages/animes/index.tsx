import React from "react";
import { GetServerSideProps, NextPage } from "next";

import { Anime, CustomResponseData } from "../../types";
import appAxios from "../../lib/appAxios";

interface Props extends CustomResponseData {
  animes: Array<Anime>;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { data } = await appAxios.get<Props>("animes", { params: context.query });

  return { props: data };
};

const ExploreAnimes: NextPage<Props> = ({ animes }) => {
  return (
    <div className="p-10">
      <ol className="list-disc list-inside">
        {animes.map((anime: Anime, index: number) => (
          <li key={index}>
            {anime.id} - {anime.canonicalTitle} - {anime.slug}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExploreAnimes;
