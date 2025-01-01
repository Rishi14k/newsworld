import { useEffect, useState } from "react";
import def from '../assets/default.jpeg'

const Card = ({category}) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setArticle(data.articles));
  }, [category]);

  return (
    <div className="container mt-4">
      <div className="row">
        {article.map((news, index) => (
          <div key={index} className="col-md-4 mb-4 cursor-pointer">
            <div className="card h-100 shadow-sm">
              <img
                src={news.urlToImage || def}
                className="card-img-top"
                alt={news.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">
                  {news.description
                    ? news.description.slice(0, 100) + "..."
                    : "No description available."}
                </p>
                <a href={news.url} target="_blank" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
