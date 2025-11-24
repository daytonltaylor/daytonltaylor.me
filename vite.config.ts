import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    projects: [
      {
        extends: true,
        test: {
          name: "module",
          include: ["tests/**/*.test.ts"]
        },
      },
      {
        extends: true,
        test: {
          name: "react",
          include: ["tests/**/*.test.tsx"],
          environment: "jsdom"
        }
      }
    ],
  },
})