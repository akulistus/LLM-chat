import type { ServiceConfig } from "../@types/service";
import { genearate } from "proxy/codex";

export default (appConfig: ServiceConfig) => {
  const { app, idManager } = appConfig;  
  app.post("/api/messages", async (request, response) => {
    const id = idManager.next();
    console.log("POST new promt with id " + id);
    genearate(request.body.message, appConfig);
    response.status(200).send({ id })
  });
}