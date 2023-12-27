import { CreateMessageInput, WebSocketMessage } from "types";
import { insertMessage } from "./insertMessage";
import { getWebSocketConnection } from "~/utils/sockets/socketRegistry";
import { sendSocketMessage } from "../../utils/sockets/sendSocketMessage";

export async function handleNewMessage(messageData: CreateMessageInput) {
  const message = (await insertMessage(messageData)).rows[0];

  const socket = getWebSocketConnection(message.chatId);

  const socketMessage: WebSocketMessage = {
    action: "newMessage",
    data: message,
  };

  await sendSocketMessage({ socketId: "", message: socketMessage });
}
