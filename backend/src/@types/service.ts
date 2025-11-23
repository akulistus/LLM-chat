import type { Express } from "express";

export type ServiceConfig = {
  app: Express,
  port: number,
  dbPath: string,
};