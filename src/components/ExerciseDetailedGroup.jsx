import React from "react";

function ExerciseDetailedGroup({ selectedExercise, onAddExercise }) {
  if (!selectedExercise) {
    return <div>Select an exercise to see the details</div>;
  }

  // Determine if the video field is a full URL or a YouTube ID
  const videoSrc = selectedExercise.video?.includes("http")
    ? selectedExercise.video
    : `https://www.youtube.com/embed/${selectedExercise.video}`;

  return (
    <div className="size-full h-full flex flex-col justify-start">
      <h1 className="font-bold text-5xl text-center mb-15">
        {selectedExercise.name}
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-center md:items-start w-full h-110">
        <div className="flex flex-col items-center md:items-start">
          {selectedExercise.video && (
            <iframe
              width="560"
              height="315"
              src={videoSrc}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-xl"
            ></iframe>
          )}
          <h2 className="bg-[#e4c775] text-[#1b2a41] w-auto py-2 px-6 mt-5 text-center rounded-xl shadow-lg font-semibold">
            {selectedExercise.category}
          </h2>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start gap-7">
          {selectedExercise.targetMuscles && (
            <>
              <h3 className="text-center text-xl font-bold">Target Muscles</h3>
              <p className="text-center text-gray-700 text-xl leading-relaxed w-full">
                {Array.isArray(selectedExercise.targetMuscles.join(", "))}
              </p>
            </>
          )}
          {selectedExercise.synergistMuscles && (
            <>
              <h3 className="text-center text-xl font-bold">Synergist Muscles</h3>
              <p className="text-center text-gray-700 text-xl leading-relaxed w-full">
                {selectedExercise.synergistMuscles.join(", ")}
              </p>
            </>
          )}
          {selectedExercise.difficulty && (
            <>
              <h3 className="text-center text-xl font-bold">Difficulty</h3>
              <p className="text-center text-gray-700 text-xl leading-relaxed w-full">
                {selectedExercise.difficulty}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="text-lg text-gray-700 w-full mt-4 md:ml-6">
        {selectedExercise.exerciseCues && (
          <>
            <h3 className="text-left text-xl font-bold">Exercise Cues</h3>
            <p>{selectedExercise.exerciseCues.join(" ")}</p>
          </>
        )}
        {selectedExercise.longInstructions && (
          <>
            <h3 className="text-left text-xl font-bold mt-5">Instructions</h3>
            <p>{selectedExercise.longInstructions}</p>
          </>
        )}
      </div>

      <button onClick = {() => onAddExercise(selectedExercise)} className = "bg-[#e4c775] text-[#1b2a41] w-auto py-2 px-6 mt-5 text-center rounded-xl shadow-lg font-semibold hover:bg-sky-400 transition duration-300">Add To Program</button>
    </div>
  );
}

export default ExerciseDetailedGroup;
