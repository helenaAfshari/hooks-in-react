import "./article.css";

export default function Article({ title, description }) {
  return (
    <article className="article-card">
      <h2 className="article-title">{title}</h2>

      <p className="article-description">
        {description}
      </p>

      <button className="article-button" type="button">
        مشاهده مقاله
      </button>
    </article>
  );
}