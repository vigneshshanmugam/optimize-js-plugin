# optimize-js-plugin

Webpack plugin that uses [optimize-js](https://github.com/nolanlawson/optimize-js)

Thanks to @nolanlawson for his awesome work.

## Install

```sh
npm i --save-dev optimize-js-plugin
```

## Usage

```js
// webpack.config.js
const OptimizeJsPlugin = require("optimize-js-plugin");
module.exports = {
  entry: //...,
  output: //...,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(options),
    new OptimizeJsPlugin({
        sourceMap: false
    })
  ]
}
```

### Example

To check the example, run

```js
npm run example
```

### Options

All options as mentioned [here](https://github.com/nolanlawson/optimize-js#javascript-api)
