import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import expressionSlice from "../features/expressionSlice";

export const store = configureStore({
  reducer: {
    expression: expressionSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
