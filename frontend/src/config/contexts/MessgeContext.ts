import { createContext } from "react";
import type { ActionType, MessageContextProps } from "../../@types/messages";

export const MessageContext = createContext<MessageContextProps | null>(null);
export const MessgaeDispatchContext = createContext<React.Dispatch<ActionType> | null>(null);