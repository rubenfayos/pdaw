import { Request, Response } from "express";
import { LoginInput } from "types";
import { getUserByEmail } from "~/services";
import { compare } from "bcrypt";

export async function handleLoginController(
  req: Request<unknown, unknown, LoginInput>,
  res: Response,
) {
  const data = req.body;

  const user = (await getUserByEmail(data.email)).rows[0];

  if (!user)
    return res
      .status(401)
      .json({ message: "El usuario o la contraseña son incorrectos" });

  // comprueba el hash de la contraseña encriptada de la base de datos con el hash de la contraseña ingresada por el usuario
  const checkPassword = await compare(data.password, user.password);

  if (!checkPassword) {
    return res
      .status(401)
      .json({ message: "El usuario o la contraseña son incorrectos" });
  }

  res.status(200).json({ user, message: "Has iniciado sesión correctament" });
}
