import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    // Check to see if exercises are loaded, stop re-renders
    if (exercises.length === 0 || deleted) {
      getExercises();
      setTimeout(() => {
        setDeleted(false);
      }, 3000);
    } else {
      console.log("Exercises Loaded");
    }
  }, [deleted]);

  const getExercises = () => {
    let exerciseData = [];
    axios.get("http://localhost:5000/exercises/").then((res) => {
      if (res.data.length > 0) {
        exerciseData = res.data.map((exercise) => exercise);
        console.log(exerciseData);
      }
      setExercises(exerciseData);
    });
  };

  const deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/exercises/${id}`);
    setTimeout(() => {
      setDeleted(true);
    }, 1500);
    console.log("Deleted exercise");
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={exercise._id} className="mb-4 pb-4">
              <td>{exercise.username}</td>
              <td>{exercise.description}</td>
              <td>{exercise.duration} minutes</td>
              <td>{exercise.date.substring(0, 10)}</td>
              <td>
                <Link to={"/edit/" + exercise._id}>edit</Link> |{" "}
                <a
                  href="#"
                  onClick={() => {
                    deleteExercise(exercise._id);
                  }}>
                  delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
