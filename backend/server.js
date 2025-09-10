import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // loads .env
console.log("Mongo URI:", process.env.ATLAS_URI);


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("Exercises");
    const lowerBodyExercises = db.collection("Lower Body Exercises");
    const upperBodyExercises = db.collection("Upper Body Exercises");
    const allExercises = db.collection("All Exercises");
 
    

    app.get("/lower-body-exercises", async (req, res) => {
      const LBexercises = await lowerBodyExercises.find().toArray();
      res.json(LBexercises);
    });
    app.get("/upper-body-exercises", async (req, res) => {
      const upExercises = await upperBodyExercises.find().toArray();
      res.json(upExercises);
    });
    app.get("/allExercises", async (req, res) => {
      const masterExercises = await allExercises.find().toArray();
      res.json(masterExercises);
    });


    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });

  } catch (err) {
    console.error("❌ MongoDB error:", err);
  }
}

main();

