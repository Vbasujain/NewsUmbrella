import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';                                  
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import useTheme from "../contexts/theme"; // Import useTheme
//rrrr
const News = ({ country = 'in', pageSize = 8, category = 'general', apiKey, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { themeMode } = useTheme(); // Access themeMode from the context

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(false);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);

    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)}☂️NewsUmbrella `;
    setPage(1); // Reset page number when category changes
    setArticles([]); // Clear the current articles array
    updateNews();
  }, [category, country]); // Re-fetch news whenever category or country changes

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div
      className={`${
        themeMode === "dark" ? " bg-slate-700" : "bg-slate-50"
      }  `}
    >
      <h1
        className={`text-center ${
          themeMode === "dark" ? "text-white bg-slate-700" : "text-black"
        } text-2xl font-bold my-4`}
      >
        NewsUmbrella - Top {capitalizeFirstLetter(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div
          className={`container mx-auto px-4   `}
        >
          <div className="flex flex-wrap -mx-2 my-2">
            {articles.map((element, index) => (
              <div
                className="w-full md:w-1/3 px-2 mb-4"
                key={`${element.url} - ${index}`}
              >
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;