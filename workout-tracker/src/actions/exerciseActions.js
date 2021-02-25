import axios from "axios";
import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
  EXERCISE_DELETE_REQUEST,
  EXERCISE_DELETE_SUCCESS,
  EXERCISE_DELETE_FAIL,
} from "../constants/exerciseConstants";

export const listExercises = () => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/exercises/");

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
