const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  alias: {
    "@": "/src",
    "components": "/src/components",
  }
});
