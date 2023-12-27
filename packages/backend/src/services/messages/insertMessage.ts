import { db } from "~/utils/db/db";
import { Message, CreateMessageInput } from "types";

export const insertMessage = (data: CreateMessageInput) =>
  db.query<Message>(
    "INSERT INTO messages (content, user_id, chat_id) VALUES ($1, $2, $3) RETURNING *",
    [data.content, data.userId, data.chatId],
  );
