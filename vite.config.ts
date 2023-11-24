import { sveltekit } from "@sveltejs/kit/vite";
import { type PluginOption, defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [sveltekit()];

  if (mode === "development") {
    plugins.push(mkcert());
  }

  return {
    plugins,
  };
});
