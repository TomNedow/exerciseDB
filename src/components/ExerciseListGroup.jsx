import React from "react";

function ExerciseListGroup({ data, onSelectExercise }) {
  const handleExerciseClick = (exercise) => {
    onSelectExercise(exercise);
  };

  return (
    <>
      <ul>
        {data.map((exercise, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => handleExerciseClick(exercise)}
          >
            <h1>{exercise.name}</h1>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ExerciseListGroup;
