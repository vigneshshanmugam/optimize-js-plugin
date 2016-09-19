'use strict';

const optimizeJs = require('optimize-js');
const { RawSource } = require("webpack-sources");

module.exports = class OptimizeJsPlugin {
    constructor({ options = {} }) {
        this.options = options;
    }

    apply(compiler) {
        const jsregex = /\.js($|\?)/i;
         const useSourceMap = !!this.options.sourceMap;

        compiler.plugin('emit', (compilation, callback) => {
            compilation.chunks.forEach((chunk) => {
                const files = [];

                chunk.files.forEach(file => files.push(file));
                files
                    .filter(file => jsregex.test(file))
                    .forEach(file => {
                        try {
                            const asset = compilation.assets[file];
                            const input = asset.source();
                            const result = optimizeJs(input, useSourceMap);
                            compilation.assets[file] = new RawSource(result);
                        } catch(e) {
                            compilation.errors.push(e);
                        }
                    });
            })
            callback();
        });
    }
}
