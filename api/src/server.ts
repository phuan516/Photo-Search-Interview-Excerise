import { getPostgresClient } from "./postgres";
import express from "express";
import cors from "cors";

import { collectionsRouter } from "./routes/collections";
import { photosRouter } from "./routes/photos";
import { photographerRouter } from "./routes/photographer";

/** Connect to the database then start the API server */
getPostgresClient()
  .then((pgClient) => {
    const app = express();

    app.use(cors());

    /**
     * Demo endpoint for making a database query.
     * Please feel free to use the pgClient directly or use your
     * preferred ORM / query builder library.
     */
    app.get("/", async (req, res) => {
      const data = await pgClient.query("SELECT * FROM photographer");
      res.send(data.rows[0].now);
    });

    app.use("/collections", collectionsRouter(pgClient));
    app.use("/photos", photosRouter(pgClient));
    app.use("/photographer", photographerRouter(pgClient));

    app.listen(8080, () => {
      console.log("API server ready at http://localhost:8080");
    });
  })
  .catch((err) => {
    console.error("Error connecting to postgres: ", err);
  });
