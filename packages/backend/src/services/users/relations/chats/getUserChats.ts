import { db } from "~/utils/db/db";
import { Chat } from "types";

/**
 * Busca los chats de un usuario en la base datos
 * @param userId id del usuario
 * @returns {Promise<QueryResult<Chat[]>>}
 */
export const getUserChats = (userId: string) =>
  db.query<Chat>("SELECT * FROM users_chats WHERE user_id = $1", [userId]);
