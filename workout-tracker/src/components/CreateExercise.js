import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { listUsers, addExercise } from "../actions/exerciseActions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = ({ history }) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  //Grab redux state
  const userList = useSelector((state) => state.userList);
  //Destructure redux state
  const { users, error, loading } = userList;

  useEffect(() => {
    if (users && users.length > 0) {
      setUsername(users[0].username);
    } else {
      dispatch(listUsers());
    }
  }, [dispatch, users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    dispatch(addExercise(exercise));

    console.log(exercise);

    history.push("/");
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
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
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateExercise;
