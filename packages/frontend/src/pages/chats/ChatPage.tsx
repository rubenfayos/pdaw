import { useParams } from "@solidjs/router";
import ChatContainer from "~/containers/chats/ChatContainer";

function ChatPage() {
  const { chatId } = useParams<{ chatId: string }>();

  return <ChatContainer chatId={chatId} />;
}

export default ChatPage;
