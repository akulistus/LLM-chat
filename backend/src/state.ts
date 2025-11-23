import fs from "node:fs/promises";
import { State } from "./@types/state";

export default async (filepath: string): Promise<State> => {
  try {
    await fs.access(filepath, fs.constants.F_OK);
    const file = await fs.readFile(filepath, "utf8"); 
    return JSON.parse(file);
  } catch {
    return {
      messages: []
    }
  }
};

export const saveCurrentState = async (filepath: string, state: State) => {
  try {
    await fs.access(filepath, fs.constants.F_OK);
    console.log("Here");
    await fs.writeFile(filepath, JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
}