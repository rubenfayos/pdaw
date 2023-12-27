import { createSignal } from "solid-js";

type Props = {};

function ChatInput({}: Props) {
  const [message, setMessage] = createSignal("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(message());
    setMessage("");
  };

  return (
    <div class="flex flex-2 border-t p-4">
      <form onSubmit={handleSubmit} class="w-full">
        <div class="flex items-center gap-4 justify-center">
          <div class="w-3/4">
            <input class="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"></input>
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
