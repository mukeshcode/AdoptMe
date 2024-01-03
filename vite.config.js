import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./AdoptMe",
  plugins: [react()],
  root: "src"
});