import React from "react";
import { Link } from "react-router-dom";
import "./SliderItem.css";

// Destructure slide as object
const SliderItem = ({ slide }) => {
  const { id, title, image, prev, next } = slide;

  return (
    // set dynamic id
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="slide-img w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2"></div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-3/5 left-24 top-3/4">
        <Link to={"/menu"}>
          <button className="btn btn-outline btn-primary mr-5 text-base-100">
            Explore
          </button>
        </Link>
        <p className="text-4xl text-primary">{title}</p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
