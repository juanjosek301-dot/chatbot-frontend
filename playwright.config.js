import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // La verificación de perfiles consulta el mismo backend y PostgreSQL local.
  // Ejecutar en serie evita intermitencias en el entorno de desarrollo compartido.
  fullyParallel: false,
  reporter: "list",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:5173",
    browserName: "chromium",
    headless: true,
  },
});


