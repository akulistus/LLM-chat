

export const splitIntoWords = (text: string): string[] => {
  return text.split(/(\s+)/).filter(Boolean);
};

export const joinWords = (words: string[], count: number) => {
  return words.slice(0, count).join("");
}
