module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-cssnext': {
      features: {
        customProperties: {
          preserve: true,
          variables:
             {
               'foo-background-container': '#FFF',
               'foo-border-color-primary': '#42b983',
               'foo-border-radius': '4px',
               'foo-color-primary': '#42b983',
               'foo-color-secondary': 'darkslategray'
             }
        }
      }
    }
  }
};
