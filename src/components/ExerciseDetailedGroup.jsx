import React, { useState } from "react";

function ExerciseDetailedGroup({ selectedExercise }) {
  if (!selectedExercise) {
    return <div>Select an exercise to see the details</div>;
  }

  return (
    <>
      <div className="size-full h-full flex flex-col justify-start">
        <h1 className="font-bold text-5xl text-center mb-15">
          {selectedExercise.name}
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center md:items-start w-full h-110">
          <div className="flex flex-col items-center md:items-start">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${
                selectedExercise.youtubeVideo.split("v=")[1]
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-xl"
            ></iframe>
            <h2 className="bg-[#e4c775] text-[#1b2a41] w-auto py-2 px-6 mt-5 text-center rounded-xl shadow-lg font-semibold">
              {selectedExercise.category}
            </h2>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-start gap-7">
            <h3 className="text-center text-xl font-bold">Target Muscles</h3>
            <p className="text-center text-gray-700 text-xl leading-relaxed w-full">
              {selectedExercise.targetMuscles.join(", ")}
            </p>
            <h3 className="text-center text-xl font-bold">Synergist Muscles</h3>
            <p className="text-center text-gray-700 text-xl leading-relaxed w-full">
              {selectedExercise.synergistMuscles.join(", ")}
            </p>
            <h3 className="text-center text-xl font-bold">Diffculty</h3>
            <p className="text-center text-gray-700 text-xl leading-relaxed w-full">
              {selectedExercise.difficulty}
            </p>
          </div>
        </div>
        <div className="text-lg text-gray-700 w-100% mt-4 md:ml-6">
          <h3 className="text-left text-xl font-bold">Exercise Cues</h3>
          {selectedExercise.exerciseCues.join(" ")}
          <h3 className="text-left text-xl font-bold mt-5">Instructions</h3>
          {selectedExercise.longInstructions}
        </div>
      </div>
    </>
  );
}

export default ExerciseDetailedGroup;
