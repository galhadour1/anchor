import { createStore, combineReducers } from "redux";
import questionReducer from "../reducers/questionsReducer";

const rootReducer = combineReducers({
  questions: questionReducer,
});

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
