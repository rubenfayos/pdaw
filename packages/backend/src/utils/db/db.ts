import { Client } from "pg";
const db = new Client();

async function initializeDatabase() {
  try {
    await db.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Propagate the error if the connection fails
  }
}

async function closeDatabase() {
  try {
    await db.end();
    console.log("Disconnected from the database");
  } catch (error) {
    console.error("Error disconnecting from the database:", error);
    throw error; // Propagate the error if the disconnection fails
  }
}

export { db, initializeDatabase, closeDatabase };
