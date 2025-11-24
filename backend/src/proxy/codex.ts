export const generate = (prmpt: string) => {
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
}