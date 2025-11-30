import type { PostMessageResponse } from "../@types/services";
import { apiRoutes } from "../helpers/routes";

export const messagesApi = {
  get: () => getMessages(),
  post: (message: string) => postMessage(message),
};

const getMessages = async () => {
  const result = await fetch(apiRoutes.messages(), {
    method: "GET"
  });

  return result;
};

const postMessage = async (message: string): Promise<PostMessageResponse> => {
  const result = await fetch(apiRoutes.messages(), {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      message
    })
  });

  return result.json();
};