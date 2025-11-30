import { MessageProvider } from "./config/providers/MessageProvider";
import { ChartPage } from "./page/ChatPage/ChatPage";

export const App: React.FC = () => {
  return (
    <MessageProvider>
      <div className="app">
        <ChartPage />
      </div>
    </MessageProvider>
  );
};