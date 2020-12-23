const path = require('path')
exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [{
            loader: 'svg-sprite-loader',
            options: { symbolId: "icon-[name]" }
          }]
        }
      ]
    }
  })
}
