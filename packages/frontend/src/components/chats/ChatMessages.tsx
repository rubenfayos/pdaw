import { For } from "solid-js";
import { Message } from "types";
import MessageComponent from "../messages/MessageComponent";

type Props = {};

const messages: Message[] = [
  {
    chatId: "1",
    content: "Hello",
    createdAt: new Date(),
    id: "1",
    userId: "1",
  },
  {
    chatId: "1",
    content: "Hello",
    createdAt: new Date(),
    id: "2",
    userId: "1",
  },
  {
    chatId: "1",
    content: "Hello",
    createdAt: new Date(),
    id: "3",
    userId: "2",
  },
  {
    chatId: "1",
    content: "Hello",
    createdAt: new Date(),
    id: "4",
    userId: "1",
  },
  {
    chatId: "1",
    content: "Hello",
    createdAt: new Date(),
    id: "5",
    userId: "2",
  },
];

function ChatMessages({}: Props) {
  return (
    <div class="p-4 flex-1 flex flex-col-reverse overflow-y-auto">
      <For each={messages}>
        {(message) => <MessageComponent message={message} />}
      </For>
    </div>
  );
}
export default ChatMessages;
