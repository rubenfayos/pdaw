import { createSignal } from "solid-js";
import { Chat } from "types";
import ChatHeader from "~/components/chats/ChatHeader";
import ChatInput from "~/components/chats/ChatInput";
import ChatMessages from "~/components/chats/ChatMessages";
import { api } from "~/utils/api";

const chatt: Chat = {
  id: "1234",
  createdAt: "a",
  name: "Nombre",
};

type Props = { chatId: string };

function ChatContainer(props: Props) {
  const [chat, setChat] = createSignal<Chat | null>(null);

  // Fetch chat data when the component mounts
  const fetchChatData = async () => {
    try {
      const response = await api.get<Chat>(`/chats/${props.chatId}`);
      setChat(response.data);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  fetchChatData();

  const ch = chat();

  // if (!ch) {
  //   // You can return a loading indicator or handle the case when the data is still loading
  //   return <div>Loading...</div>;
  // }

  return (
    <div class="flex flex-col h-screen">
      <ChatHeader chat={chatt} />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}

export default ChatContainer;
