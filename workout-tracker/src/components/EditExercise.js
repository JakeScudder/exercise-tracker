import React, { useState, useEffect } from "react";
import {
  listUsers,
  updateExercise,
  exerciseById,
} from "../actions/exerciseActions";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = ({ match }) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  //Grab redux state
  const userList = useSelector((state) => state.userList);
  //Destructure redux state
  const { users, error, loading } = userList;

  const exerciseId = useSelector((state) => state.exerciseId);

  const {
    exercise,
    error: errorExercise,
    loading: loadingExercise,
  } = exerciseId;

  useEffect(() => {
    if (exercise && exercise.username) {
      setUsername(exercise.username);
      setDescription(exercise.description);
      setDuration(exercise.duration);
      setDate(new Date(exercise.date));
    } else {
      dispatch(listUsers());
      dispatch(exerciseById(match.params.id));
    }
  }, [exercise, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExercise = {
      username,
      description,
      duration,
      date,
    };

    dispatch(updateExercise(updatedExercise, exercise._id));

    window.location = "/";
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}>
              {users.map((user) => {
                return (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default EditExercise;
