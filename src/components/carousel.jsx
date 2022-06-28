import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [interval, setInterval] = useState(3);
  const [total, setTotal] = useState(items.length);
  const [imgToggle, setImgToggle] = useState(false);

  const imageToggle = (width) => {
    console.log(width);
    if (width > 768 && !imgToggle) {
      setImgToggle(true);
    } else {
      setImgToggle(false);
    }
  };

  let timer;
  useEffect(() => {
    imageToggle(window.innerWidth);
    window.onresize = (e) => {
      clearTimeout(timer);
      timer = setTimeout(imageToggle.bind(this, e.target.outerWidth), 250);
    };
  }, []);

  const pageForward = (interval) => {
    if (start >= interval) {
      const newStart = start - interval;
      const newEnd = end - interval;
      setEnd(newEnd > interval ? newEnd : interval);
      setStart(newStart > 0 ? newStart : 0);
    }
  };

  const pageBack = () => {
    if (end < total) {
      const newStart = start + interval;
      const newEnd = end + interval;
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  const jumpToPage = (start, end) => {
    setStart(start);
    setEnd(end);
  };

  const getMarkers = () => {
    const markers = [];
    const increment = total / interval;
    for (let i = 0; i < increment; i++) {
      markers.push(
        <svg
          width="25"
          height="25"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          onClick={jumpToPage.bind(this, i * interval, i * interval + interval)}
        >
          <circle
            className={
              end > i * interval && start <= i * interval ? "active" : ""
            }
            cx="25"
            cy="25"
            r="23.5"
            stroke="black"
            fillOpacity="0"
          />
        </svg>
      );
    }
    return markers;
  };
  return (
    <>
      <div className="carousel">{items.slice(start, end)}</div>
      <div className="page-buttons">
        {start !== 0 && (
          <svg
            onClick={pageForward.bind(this, interval)}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillOpacity="0"
              d="M3.35453 25.9463L48.5 2.47068V47.6161L3.35453 25.9463Z"
              stroke="black"
            />
          </svg>
        )}
        {getMarkers()}
        {end !== total && (
          <svg
            onClick={pageBack.bind(this, interval)}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.6455 25.9463L1.5 2.47068V47.6161L46.6455 25.9463Z"
              stroke="black"
              fillOpacity="0"
            />
          </svg>
        )}
      </div>
    </>
  );
};

export default Carousel;
