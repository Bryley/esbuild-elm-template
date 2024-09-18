import ElmPlugin from "esbuild-plugin-elm";
import esbuild from "esbuild";
import { livereloadPlugin } from "@jgoz/esbuild-plugin-livereload";
import postCssPlugin from "esbuild-style-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const watch = process.argv.includes("--watch");

/**
 * @type {import('esbuild').BuildOptions}
 */
const buildOptions = {
  entryPoints: ["./src/main.ts"],
  bundle: true,
  outdir: "gen",
  sourcemap: watch,
  minify: !watch,
  plugins: [
    ElmPlugin({
      debug: watch,
      optimize: !watch,
      clearOnWatch: false,
      verbose: true,
    }),
    // Only include live reload plugin if watch is enabled
    ...(watch ? [livereloadPlugin()] : []),
    postCssPlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
};

if (watch) {
  const ctx = await esbuild
    .context(buildOptions)
    .catch((e) => (console.error(e), process.exit(1)));
  console.log("Watching");
  await ctx.watch();
} else {
  console.log("Building");
  await esbuild.build(buildOptions);
}
