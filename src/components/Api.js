// api.js

import axios from "axios";

const API_URL = "https://staging-store-connected-with-react.myshopify.com/api/2023-01/graphql.json";
const ACCESS_TOKEN = "1e3251c451e619a4e6a7d25152bf6711";

export const getArticles = () => {
  const query = `
    {
      articles(first: 10) {
        edges {
          node {
            id
            title
            contentHtml
            image {
              originalSrc
              altText
            }
            excerpt
          }
        }
      }
    }
  `;

  const headers = {
    "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN,
  };

  return axios.post(API_URL, { query }, { headers }).then((res) => res.data.data.articles.edges);
};
