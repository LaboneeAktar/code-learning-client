import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CheckOut = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(course);
  const { title, image, price } = course;

  const handleClicked = () => {
    toast.success("Check Out SuccessFull.");
  };
  return (
    <div>
      <h2 className="text-2xl text-center mt-8"> {user.displayName} </h2>
      <h3 className="text-lg text-center">Email: {user.email}</h3>
      <div className="card w-8/12 lg:card-side bg-slate-200 shadow-xl h-full my-10 mx-auto">
        <figure>
          <img src={image} className="w-96 h-full rounded-lg" alt="Album" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg">This course price is - $ {price}.</p>

          <div className="card-actions justify-end">
            <Link to="/home">
              <button
                onClick={handleClicked}
                className="btn btn-info hover:btn-error text-normal"
              >
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
