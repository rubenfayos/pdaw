import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solid()],
  base: "/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),

      routes: `${path.resolve(__dirname, "./src/routes/")}`,

      root: `${path.resolve(__dirname, "../../")}`,

      types: `${path.resolve(__dirname, "../types/")}`,
    },
  },
});
