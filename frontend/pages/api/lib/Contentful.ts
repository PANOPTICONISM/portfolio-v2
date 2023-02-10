const contentful = require("contentful");
export const client = contentful.createClient({
 space: "b2e19nh5y1ak",
 accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
 environment: "master",
});
