module.exports = {
  title: 'Material-UI Dropzone',
  showSidebar: false,
  sections: [
    {
      name: '',
      content: './docs/intro.md',
    },
    {
      name: 'Installation',
      content: './docs/installation.md',
    },
    {
      name: 'Screenshots',
      content: './docs/screenshots.md',
    },
    {
      name: 'Components',
      components: './src/components/**.js',
    },
  ],
  skipComponentsWithoutExample: true,
  usageMode: 'expand',
  sortProps: props => props,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
