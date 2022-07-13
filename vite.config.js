import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://gabrielCarrenio.github.io/To-Do-List-ReactJs/",
  plugins: [react()],
});
