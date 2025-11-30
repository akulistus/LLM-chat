import express from "express";
import http from "http";
import cors from "cors";
import { WebSocketServer } from "ws";
import type { ServiceConfig } from "./@types/service";
import { IdManager } from "utils/idManager";
import InitMessages from "./routes/messages";

const idManager = new IdManager();
const app = express();
app
.use(cors())
.use(express.json());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const appConfig: ServiceConfig = {
  app,
  wss,
  idManager,
  port: 8080,
};

InitMessages(appConfig);

server.listen(appConfig.port, () => console.log("Server started"));