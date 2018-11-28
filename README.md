# labtechs-tv

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# obfuscate source
cd dist/static/js
javascript-obfuscator <app.*.js> --compact true --string-array-encoding rc4 --rotate-string-array true --source-map true --debug-protection true
mv <app-obfuscated.*.js> <app.*.js> && mv <app-obfuscated.js.map> <app.*.js.map>

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
