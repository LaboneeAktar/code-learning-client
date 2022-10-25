import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, image, title, description } = course;
  return (
    <Link to={`/courses/${id}`}>
      <div className="card w-72 h-full bg-slate-200 shadow-xl">
        <figure>
          <img className="w-full h-full" src={image} alt="..." />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Course Name: {title}</h1>
          <p className="text-lg text-justify">
            {" "}
            <strong>Details: </strong>
            {description.slice(0, 133) + "..."}{" "}
            <Link className="text-blue-600" to={`/courses/${id}`}>
              {" "}
              <small>Read More</small>
            </Link>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Course;
