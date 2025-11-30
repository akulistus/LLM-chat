export enum MessageType {
  REQUEST = "request",
  RESPONSE = "response"
};

type MessageBase = {
  id: number,
  type: MessageType
};

type Request = MessageBase & {
  type: MessageType.REQUEST,
  data: string,
};

type Response  = MessageBase & {
  type: MessageType.RESPONSE,
  data: string
};

export type TMessage = Request | Response;

export interface MessageContextProps {
  messages: TMessage[]
};

export interface MessgaeDispatchContextProps {
  dispatch: React.Dispatch<ActionType>
}

export type ActionType = {
  type: "add" | "append",
  payload: TMessage
};