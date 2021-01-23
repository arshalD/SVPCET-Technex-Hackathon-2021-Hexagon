import React, { useState, useEffect } from "react";

function SearchNews() {
  const [newsList, setNewsList] = useState([]);
  const getNews = async () => {
    const response = await fetch(
      "http://newsapi.org/v2/top-headlines?" +
        "country=in&" +
        "category=business&" +
        "apiKey=1cb83cccf37a4b1b84942ce07256e529"
    );
    const data = await response.json();
    const { articles } = data;
    setNewsList(articles);
    console.log(data);
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="d-flex flex-wrap">
      {newsList.map((item) => {
        return (
          <div className="card mx-4 my-2" style={{ width: "18rem" }}>
            <div className="card-img-top">
              <img src={item.urlToImage} className="img-fluid" />
            </div>
            <p className="card-title lead">{item.title}</p>
            <p className="sub-title">
              {item.description}
              <a href={item.url} className="btn mx-2 btn-sm btn-outline-info">
                Read More
              </a>
            </p>

            <div className="footer">
              <blockquote>
                <span className="d-block">
                  Author: {item.author || "Annonymous"}
                </span>
                <span className="d-block"> Published: {item.publishedAt}</span>
              </blockquote>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchNews;
