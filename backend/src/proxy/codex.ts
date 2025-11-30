import type { ServiceConfig } from "../@types/service";

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
  const decoder = new TextDecoder();

  const upstram = await fetchStream(prmpt);
  if (upstram.body) {
    for await (const chunk of upstram.body) {
      const text = decoder.decode(chunk, { stream: true });
      wss.clients.forEach(client => {
        client.send(JSON.stringify({
          id,
          chunk: text
        }));
      });
    }
  }
}