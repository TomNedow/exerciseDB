import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function ProgramBuilder({
  programExercises,
  setProgramExercise,
  handleDelete,
}) {
  const [customTempos, setCustomTempos] = useState({});

  const handleTempoChange = (e, idx) => {
    const value = e.target.value;

    if (value === "custom") {
      setCustomTempos((prev) => ({ ...prev, [idx]: "" }));
    } else {
      setCustomTempos((prev) => {
        const newState = { ...prev };
        delete newState[idx];
        return newState;
      });
    }
  };

  const handleCustomInputChange = (e, idx) => {
    const value = e.target.value;
    setCustomTempos((prev) => ({ ...prev, [idx]: value }));
  };

  // Handle the drag end event to reorder exercises
  const handleDragEnd = (result) => {
  if (!result.destination) return;

  const items = Array.from(programExercises);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);

  setProgramExercise(items); // <- must update parent state
};

  return (
    <div className="flex flex-col justify-evenly gap-6 items-center w-full h-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="programExercises">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-col gap-6 w-full h-auto" // will have to change the height for formatting 
            >
              {programExercises.map((exercise, idx) => (
                <Draggable
                  key={exercise._id}
                  draggableId={exercise._id.toString()}
                  index={idx}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex flex-row items-center justify-between pl-3 pr-3 bg-white rounded-lg shadow-md h-full w-full"
                    >
                      <div className="w-full max-w-xs h-auto aspect-video rounded-lg p-3 flex justify-center items-center">
                        <iframe
                          className="rounded-lg shadow-xl w-full h-auto"
                          src={`https://www.youtube.com/embed/${exercise.video}`}
                          title={exercise.name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="flex flex-col justify-between h-full w-48 bg-blue-100">
                        <p className="font-semibold text-2xl text-gray-800 text-left self-start">
                          {exercise.name}
                        </p>
                        <p className="italic font-thin text-sm text-left self-center">
                          {exercise.category}
                        </p>
                      </div>
                      <div className="flex flex-row justify-evenly gap-6">
                        <div className="flex flex-col justify-center items-center gap-3">
                          <label>Sets x Reps</label>
                          <input
                            placeholder="Sets and Reps"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 flex-1 w-40 text-center"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <label>Tempo</label>
                          <select
                            onChange={(e) => handleTempoChange(e, idx)}
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 w-40 text-center"
                          >
                            <option value=""></option>
                            <option value="2010">2:0:1:0</option>
                            <option value="2110">2:1:1:0</option>
                            <option value="2120">2:1:2:0</option>
                            <option value="3010">3:0:1:0</option>
                            <option value="3110">3:1:1:0</option>
                            <option value="3120">3:1:2:0</option>
                            <option value="5010">5:0:1:0</option>
                            <option value="5310">5:3:1:0</option>
                            <option value="custom">Custom</option>
                          </select>

                          {customTempos.hasOwnProperty(idx) && (
                            <input
                              type="text"
                              placeholder="e.g. 4:0:2:1"
                              value={customTempos[idx]}
                              onChange={(e) => handleCustomInputChange(e, idx)}
                              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 w-40 text-center"
                            />
                          )}
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <label>Rest</label>
                          <input
                            placeholder="Rest"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 flex-1 w-40 text-center"
                          />
                        </div>
                      </div>

                      {/* Delete button */}
                      <div className="flex flex-col cursor-pointer gap-0.5 pt-3 w-30 h-full justify-start items-end">
                        <button
                          className="flex items-center justify-center text-red-500 hover:text-red-700 transition duration-200"
                          title="Delete"
                          onClick={() => handleDelete(exercise)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}{" "}
              {/* For spacing between the draggable items */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ProgramBuilder;
