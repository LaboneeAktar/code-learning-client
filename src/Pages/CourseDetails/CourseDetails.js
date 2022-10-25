import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaCrown, FaDownload, FaEye, FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();
  const { image, title, description, rating } = course;
  return (
    <div>
      <div className="flex mx-auto my-5 items-center justify-end">
        <h2 className="text-2xl mr-2">{title}</h2>
        <p className="text-xl mr-14 tooltip" data-tip="Download Now">
          <FaDownload />
        </p>
      </div>
      <div className="card w-8/12 h-full bg-slate-200 shadow-xl mx-auto my-10">
        <figure>
          <img className="w-full h-full p-5" src={image} alt="..." />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Course Name: {title}</h1>
          <p className="text-lg text-justify">
            {" "}
            <strong>Details: </strong>
            {description}
          </p>
          <div className="card-actions justify-end mt-5">
            <p className="text-xl flex items-center">
              <FaStar className="text-yellow-400 mr-3" /> {rating.rate}
            </p>
            <p className="text-xl flex items-center">
              <FaEye className="mr-3" /> {rating.count} K
            </p>
            <button className="btn btn-info hover:btn-error text-lg">
              <span className="mr-3"> Get Premium </span>
              <FaCrown className="text-yellow-400 mr-3 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;