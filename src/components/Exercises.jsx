import React, { useState, useEffect } from "react";
import ExerciseListGroup from "./ExerciseListGroup";
import ExerciseDetailedGroup from "./ExerciseDetailedGroup";
import ExerciseCard from "./ExerciseCard";
import Footer from "./Footer";

function Exercises() {
  const [data, setData] = useState([]); // State to hold all exercises
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Fetch exercise data
  useEffect(() => {
    fetch("./data/exercisesData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => setData(myJson))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  // Get related exercises
  const relatedExercises = () => {
    if (!selectedExercise) return [];
    return data
      .filter(
        (exercise) =>
          exercise.category === selectedExercise.category && // Same category
          exercise.id !== selectedExercise.id // Exclude selected exercise
      )
      .slice(0, 3); // Limit to 3 related exercises
  };

  return (
    <>
  <div className="flex flex-col p-6 bg-gray-100 mt-32 pt-10 w-[80%] mx-auto items-start">
    {/* Main Container */}
    <div className="flex flex-col md:flex-row h-auto bg-gray-100 w-full items-start justify-center">
      {/* Exercise List */}
      <div className="w-full md:w-1/5 pr-4 pt-6 bg-gray-100 h-full">
        <h1 className="text-2xl font-bold mb-4">Exercise List</h1>
        <ExerciseListGroup
          data={data} // Pass exercise data to the list
          onSelectExercise={handleSelectExercise}
        />
      </div>

      {/* Exercise Details */}
      <div className="w-full min-h-full h-auto md:w-4/5 pl-4 bg-gray-50 rounded-lg shadow p-6 flex flex-col">
        <h1 className="text-xl italic mb-4 text-gray-800">Exercise Details</h1>
        <ExerciseDetailedGroup selectedExercise={selectedExercise} />
      </div>
    </div>
  </div>

  {/* Related Exercises */}
  <div className="w-full mt-6 bg-gray-200 p-6 rounded-lg shadow-lg h-auto">
    <h3 className="text-xl font-bold mb-4 text-gray-800">Related Exercises</h3>
    <ul className="list-disc pl-6">
      <ExerciseCard
        exercises={relatedExercises()}
        onSelectExercise={handleSelectExercise}
      />
    </ul>
  </div>

  <Footer />
</>

  );
}

export default Exercises;
