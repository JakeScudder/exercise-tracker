import axios from "axios";
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
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
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

export const listExercises = () => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/exercises/");

    console.log("Exercises", data);

    dispatch({
      type: EXERCISE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXERCISE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const exerciseById = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE_ID_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/exercises/${id}`);

    dispatch({
      type: EXERCISE_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXERCISE_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE_ADD_REQUEST });

    const { data } = await axios.post(
      "http://localhost:5000/exercises/add",
      exercise
    );

    dispatch({
      type: EXERCISE_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXERCISE_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateExercise = (exercise, id) => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE_UPDATE_REQUEST });

    const { data } = await axios.post(
      `http://localhost:5000/exercises/update/${id}`,
      exercise
    );

    dispatch({
      type: EXERCISE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXERCISE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/users");

    console.log("Users:", data);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER_REQUEST });

    const formatUser = {
      username: user,
    };

    const { data } = await axios.post(
      "http://localhost:5000/users/add",
      formatUser
    );

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE_DELETE_REQUEST });

    await axios.delete(`http://localhost:5000/exercises/${id}`);

    dispatch({
      type: EXERCISE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: EXERCISE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
