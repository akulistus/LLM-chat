import { useReducer, type PropsWithChildren } from "react";
import { MessageContext, MessgaeDispatchContext } from "../contexts/MessgeContext";
import type { ActionType } from "../../@types/messages";

export const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messages, dispatch] = useReducer(messagesReducer, initialState);
  return(
    <MessageContext.Provider value={messages}>
      <MessgaeDispatchContext.Provider value={dispatch}>
        {children}
      </MessgaeDispatchContext.Provider>
    </MessageContext.Provider>
  )
};

const messagesReducer = (state: { messages: string[] }, action: ActionType) => {
  switch(action.type) {
    case "post": {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    }
    default: {
      throw Error("Unknown action: "+ action.type);
    }
  }
};

const initialState = {
  messages: ["test"]
};