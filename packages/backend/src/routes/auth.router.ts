import { Router } from "express";
import { handleLoginController, handleRegisterController } from "~/controllers";

const authRouter = Router();

authRouter.route("/login").post(handleLoginController);

authRouter.route("/register").post(handleRegisterController);

export { authRouter };
