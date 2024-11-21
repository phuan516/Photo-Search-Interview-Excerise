import express from "express";
import { Client } from "pg";

export const photographerRouter = (pgClient: Client) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const photographerId = req.query.photographerId;

    if (!photographerId) {
      return res.status(400).json({ error: "Photographer ID is required" });
    }

    try {
      const data = await pgClient.query(
        "SELECT * FROM photographer WHERE id = $1",
        [photographerId]
      );
      if (data.rows.length === 0) {
        return res.status(404).json({ error: "Photographer not found" });
      }
      res.json(data.rows[0]);
    } catch (error) {
      console.error("Error fetching photographer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
};
