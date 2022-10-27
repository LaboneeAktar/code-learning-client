import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCrown, FaDownload, FaEye, FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [8, 6],
};

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, image, title, description, rating, features, price } = course;
  return (
    <div>
      <div className="flex mx-auto my-5 items-center justify-end">
        <h2 className="text-2xl mr-2">{title}</h2>

        <Pdf
          targetRef={ref}
          filename="course-details.pdf"
          options={options}
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => (
            <button onClick={toPdf}>
              <p
                className="text-xl mr-14 mt-2 tooltip tooltip-bottom"
                data-tip="Download Pdf"
              >
                <FaDownload />
              </p>
            </button>
          )}
        </Pdf>
      </div>
      <h1 className="text-2xl text-center">Course Details</h1>
      <div className="card w-8/12 h-full bg-slate-200 shadow-xl mx-auto my-10">
        <figure>
          <img className="w-full h-full p-5" src={image} alt="..." />
        </figure>
        <div className="card-body">
          <div ref={ref}>
            <h1 className="card-title">Course Name: {title}</h1>
            <p className="text-lg text-justify">
              {" "}
              <strong>Details: </strong>
              {description}
            </p>
            <h2 className="text-xl font-bold pt-5">Some Features of {title}</h2>
            <ul className="text-lg">
              {features.map((feature, index) => (
                <li key={index}>
                  {" "}
                  {index + 1 + "."} <span className="ml-2"> {feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-actions justify-end mt-5">
            <p className="text-xl flex items-center">
              <FaStar className="text-yellow-400 mr-3" /> {rating.rate}
            </p>
            <p className="text-xl flex items-center">
              <FaEye className="mr-3" /> {rating.count} K
            </p>
            <p className="text-xl flex items-center"> $ {price}</p>
            <Link to={`/courses/checkout/${id}`}>
              <button className="btn btn-info hover:btn-error text-lg">
                <span className="mr-3"> Get Premium </span>
                <FaCrown className="text-yellow-400 mr-3 text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
