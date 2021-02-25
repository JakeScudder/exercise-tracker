import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
  EXERCISE_DELETE_REQUEST,
  EXERCISE_DELETE_SUCCESS,
  EXERCISE_DELETE_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  EXERCISE_ID_REQUEST,
  EXERCISE_ID_SUCCESS,
  EXERCISE_ID_FAIL,
  EXERCISE_ADD_REQUEST,
  EXERCISE_ADD_SUCCESS,
  EXERCISE_ADD_FAIL,
  EXERCISE_UPDATE_REQUEST,
  EXERCISE_UPDATE_SUCCESS,
  EXERCISE_UPDATE_FAIL,
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

export const exerciseIdReducer = (state = { exercise: {} }, action) => {
  switch (action.type) {
    case EXERCISE_ID_REQUEST:
      return { loading: true };
    case EXERCISE_ID_SUCCESS:
      return { loading: false, exercise: action.payload };
    case EXERCISE_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const exerciseAddReducer = (state = { exercise: {} }, action) => {
  switch (action.type) {
    case EXERCISE_ADD_REQUEST:
      return { loading: true };
    case EXERCISE_ADD_SUCCESS:
      return { loading: false, success: true, exercise: action.payload };
    case EXERCISE_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const exerciseUpdateReducer = (state = { exercise: {} }, action) => {
  switch (action.type) {
    case EXERCISE_UPDATE_REQUEST:
      return { loading: true };
    case EXERCISE_UPDATE_SUCCESS:
      return { loading: false, exercise: action.payload };
    case EXERCISE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createUserReducer = (state = { username: "" }, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { loading: true };
    case CREATE_USER_SUCCESS:
      return { loading: false, username: action.payload };
    case CREATE_USER_FAIL:
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
