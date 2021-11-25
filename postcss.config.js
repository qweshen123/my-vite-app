module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlankList: [], //指定不需要转换的类
      minPixelValue: 1,
      exclude: [/node_modules/],
      mediaQuery: false,
    }
  }
}