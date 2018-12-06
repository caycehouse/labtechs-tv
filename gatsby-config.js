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
            type: 'dark',
          },
          typography: {
            // Use the system font instead of the default Roboto font.
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
            useNextVariants: true,
          },
        },
      },
    },
    `gatsby-plugin-eslint`,
  ],
};
