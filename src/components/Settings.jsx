import { useEffect, useState } from "react";

function Settings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/lower-body-exercises")
      .then((response) => response.json())
      .then((myJson) => {
        console.log("Fetched data:", myJson); // 👈 for debugging
        setData(myJson);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Lower Body Exercises</h1>
      {data.length === 0 ? (
        <p>No exercises found</p>
      ) : (
        <ul>
          {data.map((exercise, index) => (
            <li key={index}>{exercise.name}</li> // adjust field name as needed
          ))}
        </ul>
      )}
    </div>
  );
}

export default Settings;
