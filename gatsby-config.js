module.exports = {
  siteMetadata: {
    title: "Aaron Albinson | Front End Developer",
    description: "Front End Web Developer from Manchester"
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.ts`,
        publicPath: "cms",
        htmlFavicon: "src/assets/logoCircle.png",
        customizeWebpackConfig: (config, { stage, plugins }) => {
          config.resolve = {
            ...config.resolve,
            alias: {
              ...config.resolve.alias,
              path: require.resolve("path-browserify")
            },
            fallback: {
              ...config.resolve.fallback,
              fs: false,
              child_process: false,
              module: false
            }
          };
          if (stage === "build-javascript" || stage === "develop") {
            config.plugins.push(plugins.provide({ process: "process/browser" }));
          }
          config.plugins.push(plugins.provide({ Buffer: ["buffer", "Buffer"] }));
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `lora`]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.svg",

        // WebApp Manifest Configuration
        appName: "Aaron Albinson", // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#232e3a",
        theme_color: "#232e3a",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    // {
    //   resolve: "gatsby-plugin-collections",
    //   options: {
    //     collections: [
    //       {
    //         name: "basicpage",
    //         folder: "src/pages/basicpage",
    //         permalink: "/:title",
    //         template: "basicpage"
    //       }
    //     ]
    //   }
    // },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
