import { ServiceConfig } from "../@types/service";

const fetchStream = (prmpt: string) => {
  return fetch("http://llm.codex.so/stream", {
    method: "POST",
    headers: {
      "x-api-key": process.env.API,
      "Content-Type": "application/json",
      "Accept": "application/x-ndjson"
    },
    body: JSON.stringify({
      prompt: prmpt
    }),
  });
};

export const genearate = async (prmpt: string, appConfig: ServiceConfig) => {
  const { wss, idManager } = appConfig;
  const id = idManager.next();

  const upstram = await fetchStream(prmpt);
  for await (const chunck of upstram.body) {
    wss.clients.forEach(client => {
      client.send(JSON.stringify({
        id,
        data: chunck
      }));
    })
  }
}