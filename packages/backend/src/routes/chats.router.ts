import { Router } from "express";
import { findChatController, findChatMessagesController } from "~/controllers";

const chatsRouter = Router();

chatsRouter.route("/:chatId").get(findChatController);

chatsRouter.route("/:chatId/messages").get(findChatMessagesController);

export { chatsRouter };
