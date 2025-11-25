import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

export const readStream = async (body: ReadableStream, onLine: (line: string) => void) => {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  
  while (true) {
    const { value, done } = await reader.read();
    
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    const lines = buffer.split("\n");
    buffer = lines.pop()!;

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed) onLine(trimmed);
    }
  }

  if (buffer.trim()) {
    onLine(buffer.trim());
  }
};

export const applyNdjson = (buffer: string, line: string): string => {
  try {
    const obj = JSON.parse(line);
    if (obj.type === "text-delta") {
      return buffer + obj.delta;
    }
  } catch {
    console.log("skip", line);
  }

  return buffer;
};

export const splitIntoWords = (text: string): string[] => {
  return text.split(/(\s+)/).filter(Boolean);
};

export const joinWords = (words: string[], count: number) => {
  return words.slice(0, count).join("");
}

export const mdToHtml = async (md: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(md)

  return String(file);
}