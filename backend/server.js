import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Create an Express app
const app = express();

// Use CORS to allow cross-origin requests from the frontend
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/fitnessDB";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Define an Exercise model (make sure this matches your MongoDB schema)
const Exercise = mongoose.model('Exercise', new mongoose.Schema({
  name: String,
  description: String,
}));

// Set up the API route for fetching exercises
app.get('/api/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.find(); // Fetch exercises from the database
    res.json(exercises); // Send the exercises as a JSON response
  } catch (err) {
    res.status(500).send('Error fetching exercises');
  }
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
