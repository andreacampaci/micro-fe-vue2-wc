---
to: packages/my-component-<%= name %>/package.json
---
{
  "name": "my-component-<%= name %>",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build-app": "vue-cli-service build --target wc --name my-component-<%= name %> './src/App.vue' --inline-vue",
    "deploy-app": "mkdir -p ../../cdn/apps/my-component-<%= name %> && rm -rf ../../cdn/apps/my-component-<%= name %> && mv ./dist ../../cdn/apps/my-component-<%= name %>"
  },
  "dependencies": {
    "apexcharts": "^3.25.0",
    "vue-apexcharts": "^1.6.0",
    "bootstrap": "^4.3.1",
    "bootstrap-vue": "^2.0.3",
    "core-js": "^3.6.5",
    "http-server": "^0.11.1",
    "postcss-cssnext": "^3.1.0",
    "register-service-worker": "^1.6.2",
    "vue": "^2.6.11",
    "rxjs": "^6.6.7",
    "vue-class-component": "^7.2.3",
    "vue-property-decorator": "^9.1.2",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@types/jest": "^23.1.4",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-e2e-cypress": "^3.5.0",
    "@vue/cli-plugin-pwa": "^3.5.0",
    "@vue/cli-plugin-typescript": "~4.5.0",
    "@vue/cli-plugin-unit-jest": "^3.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "babel-core": "7.0.0-bridge.0",
    "node-sass": "^4.12.0",
    "sass-loader": "^8.0.2",
    "ts-jest": "^23.0.0",
    "typescript": "~3.9.3",
    "vue-template-compiler": "^2.6.11"
  }
}
