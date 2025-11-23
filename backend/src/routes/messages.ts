import type { Express } from "express";
import { State } from "../@types/state";

export default (app: Express, state: State) => {
  app.get("/api/messages", (request, response) => {
    console.log("GET");
    response.status(200).send(state.messages);
  });
  
  app.post("/api/messages", (request, response) => {
    console.log("POST");
    state.messages.push(request.body.message);
    response.status(200).send(request.body);
  });
}