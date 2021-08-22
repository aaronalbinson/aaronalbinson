module.exports = {
  siteMetadata: {
    title: "Aaron Albinson | Front End Developer",
    description: "Front End Web Developer from Manchester"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-dark-mode`
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Albinson`,
        short_name: `Aaron Albinson`,
        start_url: `/`,
        background_color: `#2f3859`,
        theme_color: `#2f3859`,
        display: `standalone`,
        icon: `src/img/favicon.svg`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'blackboard'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `lora`]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
};
