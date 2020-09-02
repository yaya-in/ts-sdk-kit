import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { eslint } from "rollup-plugin-eslint";
import builtins from 'rollup-plugin-node-builtins';
import global from 'rollup-plugin-node-globals';

export default {
    input: 'src/main.ts',
    output: [
        {
            file: `./index.js`,
            format: 'umd',
            name: 'FxSdk',
            globals: {
                'typescript':'typescript',
                'axios':'axios',
                'bech32':'bech32',
                'bignumber.js': 'bignumber.js',
                'bip32':'bip32',
                'bip39':'bip39',
                'create-hash':'create-hash',
                'eccrypto':'eccrypto',
                'elliptic':'elliptic',
                'hdkey':'hdkey',
                'json-stable-stringify':'json-stable-stringify',
                'tiny-secp256k1':'tiny-secp256k1',
                'tweetnacl':'tweetnacl'
            },
            sourcemap: process.env.BUILD === 'dev'
        }
    ],
    plugins: [
        json(),
        resolve({ jsnext: true, preferBuiltins: true, browser: true }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        typescript({
            exclude: "node_modules/**",
            typescript: require('typescript')
        }),
        // eslint(),
        global(),
        builtins()
    ],
    external: [
        'typescript',
        'axios',
        'bech32',
        'bignumber.js',
        'bip32',
        'bip39',
        'create-hash',
        'eccrypto',
        'elliptic',
        'hdkey',
        'json-stable-stringify',
        'tiny-secp256k1',
        'tweetnacl'
    ]
}
