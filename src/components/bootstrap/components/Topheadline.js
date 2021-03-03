import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from './Card';

const Topheadline = () => {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   const url =
  //     'https://newsapi.org/v2/top-headlines?country=us&apiKey=270e491750014e89a47d15979365477a';
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  useEffect(() => {
    const url =
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=270e491750014e89a47d15979365477a';
    axios(url).then((data) => setArticles(data.data.articles));
  });

  const styleGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '10px',
  };

  return (
    <div style={styleGrid}>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
};

export default Topheadline;
