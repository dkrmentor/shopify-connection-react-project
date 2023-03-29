// Article.js

import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.image.originalSrc} alt={article.image.altText} />
      <p>{article.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: article.contentHtml }}></div>
    </div>
  );
};

export default Article;
