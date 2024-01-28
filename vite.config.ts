import react from "@vitejs/plugin-react-swc";
import vono from "@vonojs/vono";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths"
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  'server' : {'port' : 3000},
  publicDir: './client/public',
  plugins : [ react(), vono(), tsconfigPaths(), TanStackRouterVite({'routesDirectory': './client/src/routes/', generatedRouteTree: './client/src/routeTree.gen.ts'}) ],
});
