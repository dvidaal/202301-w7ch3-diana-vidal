import React from "react";
import RandomExpression from "./components/RandomExpression/RandomExpression";
import Favourites from "./components/Favourites/Favourites";
import { addToFavorites } from "./features/expressionSlice";
import { useDispatch } from "react-redux";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

const App = () => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites());
  };

  return (
    <div>
      <Header />
      <RandomExpression />
      <Button onClick={handleAddToFavorites} label="Añadir a favoritos" />
      <Favourites />
    </div>
  );
};

export default App;
