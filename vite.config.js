import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/home/mukesh/revAdoptMe",
  plugins: [react()],
  root: "src"
});