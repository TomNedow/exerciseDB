import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ExerciseListGroup from "./ExerciseListGroup";
import ExerciseDetailedGroup from "./ExerciseDetailedGroup";

function ExerciseApp({ data }) {
  const [filteredExercises, setFilteredExercises] = useState(data); // Store filtered exercises
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSearch = (searchTerm) => {
    const filtered = data.map((exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExercises(filtered);
  };

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ExerciseListGroup
        data={filteredExercises}
        onSelectExercise={handleExerciseClick}
      />
      <ExerciseDetailedGroup selectedExercise={selectedExercise} />
    </div>
  );
}

export default ExerciseApp;
