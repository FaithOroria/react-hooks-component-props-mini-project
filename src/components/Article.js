import React from "react";

function Article(props) {
  const { title, date, preview } = props;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

