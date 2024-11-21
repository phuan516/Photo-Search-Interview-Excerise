import express from "express";
import { Client } from "pg";

export const photosRouter = (pgClient: Client) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const collectionId = Number(req.query.collectionId) || 0;
    const query = (req.query.query as string) || "";
    const pageSize = 20;
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;

    try {
      let sqlQuery = "SELECT * FROM photo";
      const params: any[] = [];

      if (collectionId > 0 || query.length > 0) {
        sqlQuery += " WHERE";
        if (collectionId > 0) {
          sqlQuery += " collection_id = $1";
          params.push(collectionId);
        }
        if (query.length > 0) {
          if (params.length > 0) sqlQuery += " AND";
          sqlQuery += ` LOWER(description) LIKE $${params.length + 1}`;
          params.push(`%${query.toLowerCase()}%`);
        }
      }

      sqlQuery += ` LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
      params.push(pageSize, offset);

      const data = await pgClient.query(sqlQuery, params);
      res.json(data.rows);
    } catch (error) {
      console.error("Error fetching photos:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
};
