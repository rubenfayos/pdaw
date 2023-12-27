import { WebSocketServer } from "ws";
import {
  registerWebSocketConnection,
  unregisterWebSocketConnection,
} from "./socketRegistry";
import { authenticateWebSocket } from "./authenticateWebSocket";

export function setupSocket(server: any) {
  // puerto de escucha del websocket
  const port = process.env.WEBSOCKET_PORT
    ? parseInt(process.env.WEBSOCKET_PORT)
    : 4000;

  const wss = new WebSocketServer({
    port,
    path: "/socket",
    perMessageDeflate: {
      zlibDeflateOptions: {
        // See zlib defaults.
        chunkSize: 1024,
        memLevel: 7,
        level: 3,
      },
      zlibInflateOptions: {
        chunkSize: 10 * 1024,
      },
      // Other options settable:
      clientNoContextTakeover: true, // Defaults to negotiated value.
      serverNoContextTakeover: true, // Defaults to negotiated value.
      serverMaxWindowBits: 10, // Defaults to negotiated value.
      // Below options specified as default values.
      concurrencyLimit: 10, // Limits zlib concurrency for perf.
      threshold: 1024, // Size (in bytes) below which messages
      // should not be compressed if context takeover is disabled.
    },
  });

  // el servidor recibe una connexion de un cliente
  wss.on("connection", async (ws, req) => {
    console.log("New WebSocket request");
    const queryParams = new URLSearchParams(req.url!.split("?")[1]);
    const token = queryParams.get("token");
    const chatId = queryParams.get("chatId");

    // authenticaticate and stores user
    const e = await authenticateWebSocket(token!);

    if (!token || !chatId) {
      ws.close();
      throw new Error("Invalid token or chatId");
    }

    registerWebSocketConnection(token, chatId, ws);

    console.log("New WebSocket connection");
    // Handle WebSocket messages
    ws.on("message", (message) => {
      console.log("Socket message received");

      try {
        const parsedMessage = JSON.parse(message.toString());
        const { action, data } = parsedMessage;

        switch (action) {
          case "test":
            break;
        }
        // ... Handle other actions
      } catch (error) {
        console.error("Invalid message format:", message);
      }

      // You can send messages back to the WebSocket client here if needed
    });

    // Handle WebSocket disconnect
    ws.on("close", (ws) => {
      unregisterWebSocketConnection("userId");
      console.log("WebSocket connection closed");
    });
  });
}
