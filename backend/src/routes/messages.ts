import type { Express } from "express";
import { State } from "../@types/state";
import { generate } from "proxy/codex";

export default (app: Express, state: State) => {
  app.get("/api/messages", (request, response) => {
    console.log("GET");
    response.status(200).send(state.messages);
  });
  
  app.post("/api/messages", async (request, response) => {
    console.log("POST");
    const upstream = await generate(request.body.message);
    for await (const chunk of upstream.body) {
      response.write(chunk);
    }
    response.status(200).end();
  });
}