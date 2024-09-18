import ElmPlugin from "esbuild-plugin-elm";
import esbuild from "esbuild";
import { livereloadPlugin } from "@jgoz/esbuild-plugin-livereload";

const watch = process.argv.includes("--watch");

let ctx = await esbuild
  .context({
    entryPoints: ["./src/main.ts"],
    bundle: true,
    outdir: "gen",
    sourcemap: true,
    plugins: [ElmPlugin(), livereloadPlugin()],
  })
  .catch((e) => (console.error(e), process.exit(1)));

if (watch) {
  console.log("Watching");
  await ctx.watch();
} else {
  console.log("Rebuilding");
  await ctx.rebuild();
}
