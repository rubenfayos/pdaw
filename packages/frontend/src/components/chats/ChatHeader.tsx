import { useNavigate } from "@solidjs/router";
import { Match, Switch, createSignal } from "solid-js";
import { Chat } from "types";
import DeleteChatModal from "../modals/DeleteChatModal";

type Props = {
  chat: Chat;
};

function ChatHeader(props: Props) {
  const nav = useNavigate();

  const [showDeleteChat, setShowDeleteChat] = createSignal(false);

  const handleShowDeleteChat = () => {
    setShowDeleteChat(true);
  };

  const handleCloseShowDeleteChat = () => {
    setShowDeleteChat(false);
  };

  const handleNavigateBack = () => {
    nav("/");
  };

  return (
    <>
      <div class="flex w-full items-center border-b p-4">
        <span
          role="button"
          class="material-icons text-gray-500 hover:text-gray-800"
          style={{ "font-size": "24px" }}
          onClick={handleNavigateBack}
        >
          arrow_back
        </span>
        <h1 class="w-full text-2xl font-bold  text-center">
          {props.chat.name}
        </h1>
        <span
          role="button"
          class="material-icons text-gray-500 hover:text-gray-800"
          style={{ "font-size": "24px" }}
          onClick={handleShowDeleteChat}
        >
          delete
        </span>
      </div>
      <Switch>
        <Match when={showDeleteChat()}>
          <DeleteChatModal
            chatId={props.chat.id}
            handleClose={handleCloseShowDeleteChat}
          />
        </Match>
      </Switch>
    </>
  );
}

export default ChatHeader;
