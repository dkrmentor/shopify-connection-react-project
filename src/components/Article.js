import React from "react";
import "../Assets/Style/Article.css";

const Article = ({ article }) => {
  return (
    <div className="article-page-container">
      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <img
          className="article-image"
          src={article.image.originalSrc}
          alt={article.image.altText}
        />
        <p className="article-excerpt">{article.excerpt}</p>
      </div>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      ></div>
    </div>
  );
};

export default Article;
