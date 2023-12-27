// import { getUserById } from "~/services";
import jwt from "jsonwebtoken";

/**
 *
 * @param token
 */
export async function authenticateWebSocket(token: string) {
  const decodedToken = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
  );

  const data = decodedToken as {
    iat: number;
    exp: number;
    userId: string;
  };

  // const user = await getUserById(data.userId);

  // if (!user) {
  //   throw new Error("Invalid user");
  // }

  // return user.id;
}
