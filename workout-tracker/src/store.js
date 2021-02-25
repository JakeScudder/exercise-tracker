import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  exerciseDeleteReducer,
  exerciseListReducer,
  createUserReducer,
  userListReducer,
  exerciseIdReducer,
  exerciseAddReducer,
} from "./reducers/exerciseReducers.js";

const reducer = combineReducers({
  exerciseList: exerciseListReducer,
  exerciseId: exerciseIdReducer,
  exerciseAdd: exerciseAddReducer,
  exerciseDelete: exerciseDeleteReducer,
  createUser: createUserReducer,
  userList: userListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
