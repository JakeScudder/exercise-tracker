import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  exerciseDeleteReducer,
  exerciseListReducer,
} from "./reducers/exerciseReducers.js";

const reducer = combineReducers({
  exerciseList: exerciseListReducer,
  exerciseDelete: exerciseDeleteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
