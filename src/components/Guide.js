// Guide.js

import React, { useState, useEffect } from "react";
import Article from "./Article";
import { getArticles } from "./Api";

const Guide = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "There was an error fetching the blog articles. Please try again later."
        );
      });
  }, []);

  const handleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div>
      {selectedArticle ? (
        <Article article={selectedArticle} />
      ) : (
        <div>
          <h1>Blog Guide</h1>
          <ul>
            {articles.map(({ node: article }) => (
              <li key={article.id} onClick={() => handleClick(article)}>
                <h2>{article.title}</h2>
                <img src={article.image.originalSrc} alt={article.image.altText} />
                <p>{article.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Guide;
