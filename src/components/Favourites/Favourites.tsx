import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import FavouritesStyled from "./FavouritesStyled";

const Favourites = () => {
  const favourites = useSelector((state: RootState) => state.word.favorites);

  return (
    <>
      <FavouritesStyled>
        {favourites.map((favorite, index) => (
          <p className="favExpressions" key={index}>
            {favorite}
          </p>
        ))}
      </FavouritesStyled>
    </>
  );
};

export default Favourites;
