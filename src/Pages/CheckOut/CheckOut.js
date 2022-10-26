import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  //   console.log(course);
  const { title, image, price } = course;

  const handleClicked = () => {
    toast.success("Check Out SuccessFull.");
  };
  return (
    <div>
      <div className="card w-8/12 lg:card-side bg-slate-200 shadow-xl h-52 my-10 mx-auto">
        <figure>
          <img src={image} className="w-96 rounded-lg" alt="Album" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg">This course price is - $ {price}.</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleClicked}
              className="btn btn-info hover:btn-error text-normal"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
