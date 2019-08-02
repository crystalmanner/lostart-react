const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.lost-art.com/`,
    },

    plugins: [
        `gatsby-plugin-layout`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 800,
                            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            height: 400, // Optional: Overrides optional.ratio
                            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                            noIframeBorder: true //Optional: Disable insertion of <style> border: 0
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        // {
        //     resolve: 'gatsby-plugin-web-font-loader',
        //     options: {
        //         families: ['akzidenz-grotesk', 'akzidenz-grotesk']
        //         // google: {
        //         //     // families: ['Droid Sans', 'Droid Serif']
        //         //     families: ['akzidenz-grotesk', 'akzidenz-grotesk']
        //         // }
        //     }
        // },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        },
        `@contentful/gatsby-transformer-contentful-richtext`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `f9qtzu9dvrki`,
                accessToken: `bef8878636daf1caabe2f86fea898a7b0c1383e4e20931164eac2fafd6e6d13a`
                // spaceId: `ldgy0e55mhnf`,
                // accessToken: `1c4e6709e2d0b240f07839298e91e479a511d6deaaf89fff8bce9f1b7b0b0b76`
            }
        }
    ]
};
