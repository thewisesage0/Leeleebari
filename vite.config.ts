import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

// This project deploys as a full TanStack Start SSR app (server-rendered
// routes, not a static export). On Vercel that requires the Nitro plugin so
// Vercel can detect the framework and build real serverless functions for
// every route — without it (or with a preset targeting a different runtime,
// e.g. Cloudflare), Vercel has nothing to route requests to and every page
// beyond the pre-rendered shell 404s.
//
// nitro() is called with no preset: Vercel's zero-config detection reads the
// output itself and wires up the correct build/output settings. See
// vercel.json for the explicit framework hint that backs up that detection.
export default defineConfig({
  plugins: [
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // Route TanStack Start's bundled server entry through src/server.ts,
      // which wraps SSR errors in a friendly fallback page instead of a raw
      // 500. nitro/vite builds its server bundle from this entry.
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
  ],
});
