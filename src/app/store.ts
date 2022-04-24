import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import caseReducer from '../slices/case/caseSlice';
import counterReducer from '../slices/counter/counterSlice';

export const store = configureStore({
  reducer: {
    case: caseReducer,
    counter: counterReducer,
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
