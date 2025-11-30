import type { Express } from "express";
import { IdManager } from "utils/idManager";
import { WebSocketServer } from "ws";

export type ServiceConfig = {
  app: Express,
  wss: WebSocketServer,
  idManager: IdManager,
  port: number,
};