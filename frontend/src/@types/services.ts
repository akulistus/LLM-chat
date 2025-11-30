export type PostMessageResponse = {
  id: number,
};

export type WSMessage = {
  id: number,
  chunk: string,
}

export type Token = {
  type: "start" | "reasoning-start" | "reasoning-delta" | "reasoning-end" | "text-start" | "text-delta" | "text-end" | "finish",
  delta: string
}