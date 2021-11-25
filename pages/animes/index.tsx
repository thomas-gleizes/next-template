import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Anime, CustomResponseData } from "../../types";

interface Props extends CustomResponseData {
  animes: Array<Anime>;
}

export const getStaticProps: GetStaticProps = async () => {
  const json = await fetch("http://localhost:3001/api/animes").then((res) => res.json());

  return { props: { ...json }, revalidate: 30 };
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
