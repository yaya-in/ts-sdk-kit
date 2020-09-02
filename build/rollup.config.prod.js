import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import { eslint } from "rollup-plugin-eslint";
import builtins from 'rollup-plugin-node-builtins';
import global from 'rollup-plugin-node-globals';
import { uglify } from "rollup-plugin-uglify";
import progress from 'rollup-plugin-progress';
import analyze from 'rollup-plugin-analyzer'
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: `./index.js`,
      format: 'umd',
      name: 'FXS',
      exports: 'named',
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
      sourcemap: process.env.BUILD === 'dev',
      plugins: [ uglify()]
    },
    {
      file: `./index.es.js`,
      format: 'es',
      exports: 'named',
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
      sourcemap: process.env.BUILD === 'dev',
      plugins: [terser()]
    }
  ],
  plugins: [
    json(),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    commonjs(),
    builtins(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    global(),
    progress({
      clearLine: false // default: true
    }),
    analyze({
      summaryOnly: true
    })
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
