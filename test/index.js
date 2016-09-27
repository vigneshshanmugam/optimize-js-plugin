const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const rimraf = require("rimraf");
const assert = require('assert');
const OptimizeJsPlugin = require('../lib/index.js');
const distDir = path.join(__dirname, 'dist');
const caseDir =  path.join(__dirname, 'cases');

const runWebpack = (config, callback) => {
    const compiler = webpack(config);
    compiler.run((err) => {
        if (err) {
            console.error(err);
            return;
        }
        callback();
    });
};

const getConfig = (dir, sourceMapFlag) => {
    return {
        entry: path.join(caseDir, dir, 'input.js'),
        output: {
            path: distDir,
            filename: 'bundle.js',
            libraryTarget: 'umd'
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false
                }
            }),
            new OptimizeJsPlugin({
                sourceMap: sourceMapFlag
            })
        ]
    }
}

const getOutput = (dir) => {
    return fs.readFileSync(path.join(caseDir, dir, 'output.js'), 'utf-8').trim();
}

const getBundle = () => fs.readFileSync(path.join(distDir, 'bundle.js'), 'utf-8');

describe('optimize-js-plugin', () => {

    afterEach(() => {
        rimraf.sync(distDir);
    });

    it('without sourcemap', (done) => {
        const config = getConfig('without-sourcemap', false);
        return runWebpack(config, () => {
            const output = getOutput('without-sourcemap');
            const bundle = getBundle('bundle.js');
            assert.deepEqual(output, bundle);
            done();
        });
    });

    it('with sourcemap', (done) => {
        const config = getConfig('with-sourcemap', true);
        return runWebpack(config,() => {
            const output = getOutput('with-sourcemap');
            const bundle = getBundle('bundle.js');
            assert.equal(output, bundle);
            done();
        });
    });
});
