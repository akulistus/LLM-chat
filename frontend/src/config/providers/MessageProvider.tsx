import { useReducer, type PropsWithChildren } from "react";
import { MessageContext, MessgaeDispatchContext } from "../contexts/MessgeContext";
import type { ActionType, MessageContextProps } from "../../@types/messages";

export const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messages, dispatch] = useReducer(messagesReducer, initialState);
  return(
    <MessageContext.Provider value={messages}>
      <MessgaeDispatchContext.Provider value={{dispatch}}>
        {children}
      </MessgaeDispatchContext.Provider>
    </MessageContext.Provider>
  )
};

const messagesReducer = (state: MessageContextProps, action: ActionType) => {
  switch(action.type) {
    case "add": {
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    }
    case "append": {
      const { id, data } = action.payload;
      const messageIdx = state.messages.findIndex(msg => msg.id === id);
      if (messageIdx === -1) {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        }
      };

      const updated = {
        ...state.messages[messageIdx],
        data: state.messages[messageIdx].data + data,
      };

      return {
        ...state,
        messages: [
          ...state.messages.slice(0, messageIdx),
          updated,
          ...state.messages.slice(messageIdx + 1),
        ]
      }
    }
    default: {
      throw Error("Unknown action: "+ action.type);
    }
  }
};

const initialState = {
  messages: [],
};