import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { listExercises, deleteExercise } from "../actions/exerciseActions";

const ExercisesList = () => {
  // const [deleted, setDeleted] = useState(false);

  const dispatch = useDispatch();

  //Grab redux state
  const exerciseList = useSelector((state) => state.exerciseList);
  //Destructure redux state
  const { exercises, error, loading } = exerciseList;

  //Grab delete state
  const exerciseDelete = useSelector((state) => state.exerciseDelete);
  const { success: successDelete } = exerciseDelete;

  //Grab add exercise state
  const exerciseAdd = useSelector((state) => state.exerciseAdd);
  const { success: successAdd } = exerciseAdd;

  useEffect(() => {
    if (!exercises || exercises.length === 0 || successAdd) {
      dispatch(listExercises());
    }
  }, [dispatch, successAdd, successDelete]);

  const handleDelete = (id) => {
    dispatch(deleteExercise(id));
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
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
                      handleDelete(exercise._id);
                    }}>
                    delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExercisesList;
