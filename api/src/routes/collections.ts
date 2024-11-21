import express from "express";
import { Client } from "pg";

export const collectionsRouter = (pgClient: Client) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      const data = await pgClient.query("SELECT * FROM collection");
      res.json(data.rows);
    } catch (error) {
      console.error("Error fetching collections:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
};
