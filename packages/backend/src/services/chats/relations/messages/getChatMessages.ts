import { db } from "~/utils/db/db";

export function getChatMessages(chatId: string) {
  return db.query("SELECT * FROM messages WHERE chatId=$1::uuid", [chatId]);
}
