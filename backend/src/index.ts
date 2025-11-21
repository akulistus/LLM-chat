import express from "express";

const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  const result = await fetch("http://llm.codex.so/generate", {
    method: "POST",
    headers: {
      "x-api-key": "*",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      prompt: "Напиши приветственное сообщение"
    })
  });
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
});

app.listen(port);