import { createContext } from "react";
import type { MessageContextProps, MessgaeDispatchContextProps } from "../../@types/messages";

export const MessageContext = createContext<MessageContextProps>({ messages: [] });
export const MessgaeDispatchContext = createContext<MessgaeDispatchContextProps>({} as MessgaeDispatchContextProps);