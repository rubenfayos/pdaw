import { useNavigate } from "@solidjs/router";
import { Chat } from "types";

type Props = {
  chat: Chat;
};

function ChatHeader(props: Props) {
  const nav = useNavigate();

  const handleDeleteChat = () => {
    console.log("delete chat");
  };

  const handleNavigateBack = () => {
    nav("/");
  };

  return (
    <div class="flex w-full items-center border-b p-4">
      <span
        role="button"
        class="material-icons text-gray-500 hover:text-gray-800"
        style={{ "font-size": "24px" }}
        onClick={handleNavigateBack}
      >
        arrow_back
      </span>
      <h1 class="w-full text-2xl font-bold  text-center">{props.chat.name}</h1>
      <span
        role="button"
        class="material-icons text-gray-500 hover:text-gray-800"
        style={{ "font-size": "24px" }}
        onClick={handleDeleteChat}
      >
        delete
      </span>
    </div>
  );
}

export default ChatHeader;
