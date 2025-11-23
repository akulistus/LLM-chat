import express from "express";
import cors from "cors";
import { ServiceConfig } from "./@types/service";
import initService from "./service";

const app = express();
app
  .use(cors())
  .use(express.json());

const appConfig: ServiceConfig = {
  app,
  port: 8080,
  dbPath: "F:/LLM-chat/backend/db/db.json"
};

initService(appConfig);

// app.get("/", async (req, res) => {
//   const result = await fetch("http://llm.codex.so/generate", {
//     method: "POST",
//     headers: {
//       "x-api-key": "*",
//       "content-type": "application/json"
//     },
//     body: JSON.stringify({
//       prompt: "Напиши приветственное сообщение"
//     })
//   });
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
// });

app.listen(appConfig.port);