module.exports = {
  plugins: [
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              main: '#592a8a',
            },
            secondary: {
              main: '#ffc107',
            },
          },
          typography: {
            useNextVariants: true,
          },
        },
      },
    },
    `gatsby-plugin-eslint`,
  ],
};
