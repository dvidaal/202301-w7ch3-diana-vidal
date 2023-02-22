import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRandomExpression } from "../../features/expressionSlice";
import { RootState } from "../../app/store";
import Button from "../Button/Button";
import RandomExpressionStyled from "./RandomExpressionStyled";

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
      <RandomExpressionStyled>
        <Button
          onClick={handleButtonClick}
          label="Genera frase aleatoria de Mario"
        />
        <p className="randomExpression">{currentWord}</p>
      </RandomExpressionStyled>
    </>
  );
}

export default RandomWord;
