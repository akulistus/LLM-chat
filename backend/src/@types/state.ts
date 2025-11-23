export enum MessageType {
  REQUEST = "request",
  RESPONSE = "response"
};

export type Message = {
  type: MessageType,
  text: string,
}

export type State = {
  messages: Message[]
};