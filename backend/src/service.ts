import initState, { saveCurrentState } from "./state";
import initMessages from "./routes/messages";
import { ServiceConfig } from "./@types/service";

export default async (appConfig: ServiceConfig) => {
  const state = await initState(appConfig.dbPath);

  initMessages(appConfig.app, state);

  process.on("SIGHUP", () => {
    saveCurrentState(appConfig.dbPath, state);
    process.exit(0);
  });
  process.on("SIGINT", () => {
    saveCurrentState(appConfig.dbPath, state);
    process.exit(0);
  });
  process.on("SIGQUIT", () => {
    saveCurrentState(appConfig.dbPath, state);
    process.exit(0);
  });
}