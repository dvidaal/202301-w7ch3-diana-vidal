import { createSlice } from "@reduxjs/toolkit";
import { expressions } from "../expressions";

interface ExpressionState {
  currentExpression: string;
  favorites: string[];
}

const initialState: ExpressionState = {
  currentExpression: "",
  favorites: [],
};

const expressionSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setRandomExpression: (state) => {
      const randomIndex = Math.floor(Math.random() * expressions.length);
      state.currentExpression = expressions[randomIndex];
    },
    addToFavorites: (state) => {
      state.favorites.push(state.currentExpression);
    },
  },
});

export const { setRandomExpression, addToFavorites } = expressionSlice.actions;
export default expressionSlice.reducer;
