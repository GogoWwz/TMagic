const {
  override,
  // addWebpackModuleRule
} = require("customize-cra")

const path = require('path')

module.exports = override(
  // addWebpackModuleRule({
  //   test: /\.svg$/,
  //   include: path.resolve(__dirname, "./src/assets/icons"),
  //   use: [{
  //     loader: 'svg-sprite-loader',
  //     options: { symbolId: "icon-[name]" }
  //   }]
  // })
);