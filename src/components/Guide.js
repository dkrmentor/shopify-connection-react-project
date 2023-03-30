import React, { useState, useEffect } from "react";
import Article from "./Article";
import { getArticles } from "./Api";
import "../Assets/Style/Guide.css";
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
    <div className="guides">
      {selectedArticle ? (
        <Article article={selectedArticle} />
      ) : (
        <div className="guide-container">
          <h1 className="guide-title">Blog Guide</h1>
          <ul className="article-list">
            {articles.map(({ node: article }) => (
              <li key={article.id} onClick={() => handleClick(article)}>
                <div className="article-container">
                  <img
                    className="article-image"
                    src={article.image.originalSrc}
                    alt={article.image.altText}
                  />
                  <div className="article-content">
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-excerpt">{article.excerpt}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Guide;
