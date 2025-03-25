import React from 'react';

function ExerciseCard({ exercises, onSelectExercise }) {
  return (
    <div>
      <ul className="flex justify-evenly h-80">
        {exercises.map((exercise) => {
          // Extract YouTube Video ID from the link
          const videoId = exercise.youtubeVideo.split("v=")[1];

          return (
            <li
              key={exercise.id}
              className="cursor-pointer hover:underline bg-gray-50  h-100 w-80 border-black rounded-lg flex flex-col items-center justify-between p-2"
              onClick={() => onSelectExercise(exercise)}
            >
              {/* Use the YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={exercise.name}
                className="rounded-lg shadow-xl w-full h-48 object-cover"
              />
              <div className="text-center justify-start bg-blue-100">
                <h3 className="font-bold text-lg">{exercise.name}</h3>
                <p className="text-sm text-gray-600">{exercise.category}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExerciseCard;
