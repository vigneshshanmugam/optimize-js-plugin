# optimize-js-plugin

Webpack plugin that uses [optimize-js](https://github.com/nolanlawson/optimize-js)

[![downloads](https://img.shields.io/npm/dt/optimize-js-plugin.svg)](https://npmjs.org/package/optimize-js-plugin)
[![version](https://img.shields.io/npm/v/optimize-js-plugin.svg)](https://npmjs.org/package/optimize-js-plugin)

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

### Options

All options as mentioned [here](https://github.com/nolanlawson/optimize-js#javascript-api)
