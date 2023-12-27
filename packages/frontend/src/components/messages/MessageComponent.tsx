import { Message } from "types";

type Props = {
  message: Message;
};

function MessageComponent(props: Props) {
  const { message } = props;

  return (
    <div class={`mb-4 ${message.userId === "1" ? "self-end" : "self-start"}`}>
      <span class="text-xs font-light">
        {new Date(message.createdAt).toDateString()}
      </span>
      <div
        class={`p-3 max-w-md rounded-lg ${
          message.userId === "1"
            ? "bg-blue-500 text-white self-end"
            : "bg-gray-200 text-black self-start"
        }`}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
}

export default MessageComponent;
