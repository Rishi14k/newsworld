// import { useEffect, useState } from "react";
// import def from '../assets/default.jpeg'

// const Card = ({category}) => {
//   const [article, setArticle] = useState([]);

//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => setArticle(data.articles));
//   }, [category]);

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {article.map((news, index) => (
//           <div key={index} className="col-md-4 mb-4 cursor-pointer">
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={news.urlToImage || def}
//                 className="card-img-top"
//                 alt={news.title}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{news.title}</h5>
//                 <p className="card-text">
//                   {news.description
//                     ? news.description.slice(0, 100) + "..."
//                     : "No description available."}
//                 </p>
//                 <a href={news.url} target="_blank" className="btn btn-primary">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;


import { useEffect, useState } from "react";
import def from '../assets/default.jpeg';

const Card = ({ category }) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey='c23468b67fc845108a0b51806bd4f7f3'`;

    setLoading(true); // Start loading when the request begins
    setError(null); // Reset error before making the new request

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.articles) {
          setArticle(data.articles); // Set articles if available
        } else {
          setError("No articles found.");
        }
      })
      .catch(error => {
        setError("Failed to fetch data: " + error.message); // Handle errors
      })
      .finally(() => {
        setLoading(false); // Stop loading when request completes
      });
  }, [category]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's any issue
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {article.length > 0 ? (
          article.map((news, index) => (
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
          ))
        ) : (
          <div>No news available for this category.</div> // Handle the case when no articles are returned
        )}
      </div>
    </div>
  );
};

export default Card;
