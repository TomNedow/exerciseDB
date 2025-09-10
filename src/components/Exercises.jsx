import React, { useState, useEffect } from "react";
import ExerciseListGroup from "./ExerciseListGroup";
import ExerciseDetailedGroup from "./ExerciseDetailedGroup";
import ExerciseCard from "./ExerciseCard";
import ProgramBuilder from "./ProgramBuilder";

function Exercises() {
  const [data, setData] = useState([]); 
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [programExercise, setProgramExercise] = useState([]);

  // Add exercise to program
  const addToProgram = (exercise) => {
    setProgramExercise((prev) => {
      if (prev.find((ex) => ex.id === exercise.id)) return prev;
      return [...prev, exercise];
    });
    console.log("Added exercise:", exercise.name);
  };

  // Delete exercise from program
  const handleDelete = (exerciseToDelete) => {
    setProgramExercise((prevExercises) =>
      prevExercises.filter((exercise) => exercise.id !== exerciseToDelete.id)
    );
    console.log("Deleted exercise:", exerciseToDelete.name);
  };

  // Fetch exercises from MongoDB backend
  useEffect(() => {
    fetch("http://localhost:5000/allExercises")
      .then((response) => response.json())
      .then((myJson) => {
        console.log("Fetched data:", myJson);
        // Map MongoDB _id to id for React
        const mappedData = myJson.map((ex) => ({ ...ex, id: ex._id }));
        setData(mappedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle selecting an exercise
  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  // Related exercises: same category, exclude selected, max 3
  const relatedExercises = () => {
    if (!selectedExercise) return [];
    return data
      .filter(
        (exercise) =>
          exercise.category === selectedExercise.category &&
          exercise.id !== selectedExercise.id
      )
      .slice(0, 3);
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100 mt-32 pt-10 w-[80%] mx-auto items-start">
      {/* Main container */}
      <div className="flex flex-row md:flex-row h-auto max-h-250 bg-gray-100 w-full items-start justify-center">

        {/* Exercise List */}
        <div className="w-full md:w-1/5 pr-4 pt-6 bg-gray-100 h-full">
          <h1 className="text-2xl font-bold mb-4">Exercise List</h1>
          <ExerciseListGroup
            data={data}
            onSelectExercise={handleSelectExercise}
          />
        </div>

        {/* Exercise Details */}
        <div className="w-full min-h-full h-auto md:w-4/5 pl-4 bg-gray-50 rounded-lg shadow p-6 flex flex-col">
          <h1 className="text-xl italic mb-4 text-gray-800">
            Exercise Details
          </h1>
          <ExerciseDetailedGroup 
            selectedExercise={selectedExercise} 
            onAddExercise={addToProgram} 
          />
        </div>

        {/* Related Exercises */}
        <div className="w-auto h-full mt-6 ml-6 bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Related Exercises
          </h3>
          <ul className="list-none pl-6">
            <ExerciseCard
              exercises={relatedExercises()}
              onSelectExercise={handleSelectExercise}
            />
          </ul>
        </div>
      </div>

      {/* Program Builder */}
      <div className="w-full min-h-100 h-auto flex justify-center items-start pt-6 mt-6 mb-6">
        <ProgramBuilder 
          programExercises={programExercise} 
          setProgramExercise={setProgramExercise}
          handleDelete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default Exercises;
