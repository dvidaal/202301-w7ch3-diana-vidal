import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRandomExpression } from "../../features/expressionSlice";
import { RootState } from "../../app/store";
import Button from "../Button/Button";

function RandomWord() {
  const dispatch = useDispatch();
  const currentWord = useSelector(
    (state: RootState) => state.expression.currentExpression
  );

  const handleButtonClick = () => {
    dispatch(setRandomExpression());
  };

  return (
    <>
      <Button
        onClick={handleButtonClick}
        label="Genera frase aleatoria de Mario"
      />
      <p>{currentWord}</p>
    </>
  );
}

export default RandomWord;
