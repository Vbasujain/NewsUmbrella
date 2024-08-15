import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useTheme from "../contexts/theme"; // Import useTheme

const NewsItem = (props) => {
  let { title, imageUrl, newsUrl, author, source, date, mode } = props;
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
  const { themeMode } = useTheme(); // Access themeMode from the context

  const getTimeDifference = (publishedDate) => {
    const currentTime = new Date();
    const newsTime = new Date(publishedDate);
    const timeDiff = Math.abs(currentTime - newsTime);

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  return (
    <div className="my-1 mx-1">
      <div
        className={`card ${
          themeMode === "dark"
            ? "bg-gray-800 text-gray-100"
            : "bg-white text-gray-900"
        } shadow-lg rounded-lg overflow-hidden`}
      >
        <span
          className={`badge badge-pill ${
            themeMode === "dark"
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-200 text-red-600"
          }`}
        >
          {source ? source : "source unknown"}
        </span>
        <LazyLoadImage
          src={
            imageUrl
              ? imageUrl
              : `https://picsum.photos/200?random=${randomImageNumber}`
          }
          className="card-img-top object-cover"
          style={{ maxHeight: "200px" }}
          alt="news-thumbnail"
        />
        <div className="card-body">
          <strong>
            <h5 className="card-title">{title ? title : "Untitled News"}</h5>
          </strong>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className={`btn btn-sm ${
              themeMode === "dark" ? "btn-light" : "btn-primary"
            }`}
          >
            Read More
          </a>
          <p className="card-text mt-2">
            <small
              className={`${
                themeMode === "dark" ? "text-gray-400" : "text-danger"
              }`}
            >
              Published by {author ? author : "Unknown"},{" "}
              {date ? getTimeDifference(date) : "Date unknown"}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
