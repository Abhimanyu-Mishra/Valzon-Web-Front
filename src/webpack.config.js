module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: ['@svgr/webpack'],

        },
      ],
    },
  };