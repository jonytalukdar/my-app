import React, { useEffect, useState } from 'react';
import Cardcom from './Card';

const Topheadline = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=270e491750014e89a47d15979365477a'
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div className="d-flex">
      {articles.map((article) => (
        <Cardcom article={article}></Cardcom>
      ))}
    </div>
  );
};

export default Topheadline;
