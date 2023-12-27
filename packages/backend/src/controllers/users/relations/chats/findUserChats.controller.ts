import { Request, Response } from "express";
import { getUser } from "~/services/users/getUser";
import { Chat } from "types";
import { getUserChats } from "~/services/users/relations/chats/getUserChats";

type Params = {
  userId: string;
};

export async function findUserChatsController(
  req: Request<Params>,
  res: Response,
) {
  const { userId } = req.params;

  const user = await getUser(userId);

  if (!user) {
    res.status(400).json({ message: "No se ha encontrado el usuario" });
  }

  const chats: Chat[] = (await getUserChats(userId)).rows;

  res.status(200).json(chats);
}
