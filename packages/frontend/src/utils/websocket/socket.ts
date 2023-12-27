export function openSocket(params?: Record<string, string>) {
  let socketUrl = "ws://localhost:4000/socket";

  // crea una query con los datos de autenticación (jwt)
  if (params) {
    socketUrl +=
      "?" +
      Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
  }

  const socket = new WebSocket(`ws://localhost:4000/socket`);

  socket.onopen = () => {
    console.log("Conexión websocket abierta");
  };

  return socket;
}
