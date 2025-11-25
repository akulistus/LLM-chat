export interface MessageContextProps {
  messages: string[]
};

export interface MessgaeDispatchContextProps {
  dispatch: React.Dispatch<ActionType>
}

export type ActionType = {
  type: "post",
  payload: string
};