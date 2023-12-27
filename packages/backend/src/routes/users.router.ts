import { Router } from "express";
import { findUserChatsController } from "~/controllers";

const usersRouter = Router();

usersRouter.route("/:userId/chats").get(findUserChatsController);

export { usersRouter };
