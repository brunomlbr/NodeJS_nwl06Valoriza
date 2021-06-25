import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

import "./database";

const app = express();

// habilita que outras fontes que não sejam backend consigam acessar a aplicação
app.use(cors());
// Caso queira que somente um app ou site acesse seu app, usar desta maneira =>
// app.use(
//   cors({
//     origin: "",
//   })
// );

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

// app.get("/test", (request, response) => {
//     return response.send("Olá NLW");
// });
// app.post("/test-post", (request, response) => {
//     return response.send("Olá NLW método post");
// });

app.listen(3000, () => console.log("Server is running"));
