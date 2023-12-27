import { Request, Response } from "express";
import { getChat } from "~/services/chats/getChat";

type RequestParams = { chatId: string };

export async function findChatController(
  req: Request<RequestParams>,
  res: Response,
) {
  try {
    const { chatId } = req.params;

    const chat = (await getChat(chatId)).rows[0];

    if (!chat) {
      return res.status(404).json({ message: "No se ha encontrado el chat" });
    }

    res.status(200).json(chat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
    return;
  }
}
