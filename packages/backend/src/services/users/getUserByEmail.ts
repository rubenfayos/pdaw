import { db } from "~/utils/db/db";
import { User } from "types";

/**
 * Busca un usuario en la base datos a partir de su email
 * @param email email del usuario
 * @returns Promise<QueryResult<User>>
 */
export const getUserByEmail = (email: string) =>
  db.query<User>("SELECT * FROM users WHERE email = $1", [email]);
