import AppRouter from "./routes/app.router";
import AuthRouter from "./routes/auth.router";
import { useGlobalStore } from "./state/globalStore";

function App() {
  const { token } = useGlobalStore();

  return token() ? <AppRouter /> : <AuthRouter />;
}

export default App;
