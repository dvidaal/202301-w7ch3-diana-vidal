import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Favourites = () => {
  const favourites = useSelector(
    (state: RootState) => state.expression.favorites
  );

  return (
    <>
      {favourites.map((favourite: string, index: number) => (
        <p key={index}>{favourite}</p>
      ))}
    </>
  );
};

export default Favourites;
