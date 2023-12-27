import { useNavigate } from "@solidjs/router";
import { For, JSX } from "solid-js";
import { type Chat } from "types";
import Menu from "./Menu";

const chats: Chat[] = [
  {
    id: "1",
    createdAt: "new Date()",
    name: "Chat 1",
  },
  {
    id: "2",
    createdAt: "new Date()",
    name: "Chat 1",
  },
  {
    id: "3",
    createdAt: "new Date()",
    name: "Chat 1",
  },
];

type Props = {
  children?: JSX.Element;
};

function AppLayout(props: Props) {
  const nav = useNavigate();

  const handleNavigate = (chatId: string) => {
    console.log(chatId);
    nav(`/chats/${chatId}`);
  };

  return (
    <>
      <div class="w-1/4 flex flex-col">
        <Menu />
        <div class="bg-gray-50 flex-1">
          <For each={chats}>
            {(chat) => (
              <div
                class="p-4 border-b border-gray-300 hover:bg-gray-100"
                role="button"
                onClick={() => handleNavigate(chat.id)}
              >
                {chat.name}
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="w-full">{props.children}</div>
    </>
  );
}

export default AppLayout;
