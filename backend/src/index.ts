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

app.listen(appConfig.port);