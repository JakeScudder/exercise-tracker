import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
  EXERCISE_DELETE_REQUEST,
  EXERCISE_DELETE_SUCCESS,
  EXERCISE_DELETE_FAIL,
} from "../constants/exerciseConstants";

export const exerciseListReducer = (state = { exercises: [] }, action) => {
  switch (action.type) {
    case EXERCISE_LIST_REQUEST:
      return { loading: true };
    case EXERCISE_LIST_SUCCESS:
      return { loading: false, exercises: action.payload };
    case EXERCISE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const exerciseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EXERCISE_DELETE_REQUEST:
      return { loading: true };
    case EXERCISE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EXERCISE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
