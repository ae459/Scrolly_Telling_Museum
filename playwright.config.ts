import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: false,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4321",
    headless: true,
  },
  webServer: {
    command: "python3 -m http.server 4321 --directory out",
    port: 4321,
    reuseExistingServer: true,
  },
});
