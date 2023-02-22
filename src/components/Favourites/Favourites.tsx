import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import FavouritesStyled from "./FavouritesStyled";

const Favourites = () => {
  const favourites = useSelector(
    (state: RootState) => state.expression.favorites
  );

  return (
    <>
      <FavouritesStyled>
        {favourites.map((favourite: string, index: number) => (
          <p className="favExpression" key={index}>
            {favourite}
          </p>
        ))}
      </FavouritesStyled>
    </>
  );
};

export default Favourites;
