# `esbuild-elm-template`

This is a basic template that sets up the following frontend technologies:

- esbuild for the bundler
- ELM for the frontend framework
- Tailwind for the styles
- tailwindcss-themer-cli for the theme generator


## Installation

```
tmpdir=$(mktemp -d) && git clone https://github.com/Bryley/esbuild-elm-template.git "$tmpdir" && rm -rf $tmpdir/.git && cp -R $tmpdir . && rm -rf "$tmpdir"
```

To start this project follow these steps:

1. Edit the theme colors in `theme.yaml` and run `npm run theme` to update the
   theme. You can always change this as you go but make sure you run
   `npm run theme` after any change (this will generate the `tailwind.config.js`
   and `tailwind.css` files).
2. Then simply run `npm run watch` to watch for changes inside the src
   directory. This will generate the js/css files inside of the `./gen` folder,
   this folder should be accessable to your backend static file server.
3. For quick testing without a backend yet (or if you are creating your template)
   you can simply go into your browser and and go to
   `file:///absolute/path/to/the/index.html`. This file reads the contents of
   the `./gen` folder.
4. 
