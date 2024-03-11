import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import daisyui from "daisyui";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), daisyui()],
});
