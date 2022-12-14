# Adding a Library

You can add any third-party library you would like.

## Without a Bundler
Be sure to have the JS library in the Codio project or use a CDN. Then use a script tag to point towards the library. The example in the top-left panel is made with [P5.js](https://p5js.org).

```html
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
</head>
```

## With NPM
If you are using the Node stack with your project, you can install packages with NPM. Running commands with NPM is also possible, though it requires a few more steps. The example in the bottom-left panel comes from the [Svelte](https://svelte.dev) framework. Click the button below to launch the development server. `Hello World` should appear in the bottom-left panel (you may need to refresh the panel by clicking the icon with two blue arrows). 

{Run dev server!|terminal}(cd js_examples/my-svelte-project/ && HOST=0.0.0.0 PORT=5000 npm run dev)

The `RUN DEV SERVER!` button is created as follows:

```
{Run dev server!|terminal}(cd js_examples/my-svelte-project/ && HOST=0.0.0.0 PORT=5000 npm run dev)
```

The `|terminal` tells Codio to run a terminal command. In this case, two commands are executed. First change to the directory with the JS project, and then run the NPM command to start the dev server. `HOST=0.0.0.0` appears before the NPM command because Codio requires that `localhost` is set to `0.0.0.0` (see the `localhost` page for more information).