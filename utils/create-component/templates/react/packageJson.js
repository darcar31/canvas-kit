module.exports = (name, moduleName, description, unstable) => `
{
  "name": "${moduleName}",
  "version": "0.0.0",
  "description": "${description}",
  "author": "Workday, Inc. (https://www.workday.com)",
  "license": "Apache-2.0",
  "main": "dist/commonjs/index.js",
  "module": "dist/es6/index.js",
  "sideEffects": false,
  "types": "dist/es6/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://github.com/Workday/canvas-kit/tree/master/modules/${
      unstable ? '_labs/' : ''
    }${name}/react"
  },
  "files": [
    "dist/",
    "lib/",
    "index.ts"
  ],
  "scripts": {
    "watch": "yarn build:es6 -w",
    "clean": "rimraf dist && rimraf .build-info && mkdirp dist",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:es6": "tsc -p tsconfig.es6.json",
    "build:rebuild": "npm-run-all clean build",
    "build": "npm-run-all --parallel build:cjs build:es6",
    "depcheck": "node ../../../${unstable ? '../' : ''}utils/check-dependencies-exist.js"
  },
  "keywords": [
    "canvas",
    "canvas-kit",
    "react",
    "components",
    "workday",
    "${name}"
  ],
  "peerDependencies": {
    "react": ">= 16.8 < 17"
  }
}
`;
