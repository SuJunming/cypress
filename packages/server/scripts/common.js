'use strict'

const { builtinModules } = require('module')
const external = new Set([
  ...builtinModules,
  //
  // Circular deps
  //

  // have to be required normally
  '@packages/ts/register',

  // breaking bundle
  '@microsoft/typescript-etw',
  'cson',
  'fsevents',
  'node-webkit-updater',
  'osx-temperature-sensor',
  'parse5-html-rewriting-stream',
  'readable-stream',
  'registry-js',
  'requirejs',
  'xmlbuilder',
  'spawn-sync',

  // non-breaking
  'glob',

  // breaking on bundle load
  'winston',
  'sshpk',
  'postcss',
  'gifwrap',
  '@typescript-eslint',
  'tsutils',
  'coffeescript',
  'proxy',
  'source-list-map',
  'watchpack',
  '@webassemblyjs',
  'typescript-estree',
  'semver',
  'electron',
])

// TODO: Not sure why those aren't captured.
// Also we had to add these to our deps to make things work
const extraModules = ['bufferutil', 'utf-8-validate']

module.exports = {
  external,
  extraModules,
}
