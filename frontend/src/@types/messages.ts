export interface MessageContextProps {
  messages: string[]
};

export type ActionType = {
  type: "post",
  payload: string
};