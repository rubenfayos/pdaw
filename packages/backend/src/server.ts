import express from "express";
import { setupSocket } from "./utils/sockets";
import { authRouter, chatsRouter, usersRouter } from "./routes";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

// Configuración cors
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// asigna las rutas a los endpoints
app.use("/auth", authRouter);

app.use("/users", usersRouter);

app.use("/chats", chatsRouter);

// inicializa el socket server y lo asigna al app
setupSocket(app);

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
