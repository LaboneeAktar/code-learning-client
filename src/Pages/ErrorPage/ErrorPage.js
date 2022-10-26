import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/images/img-404.jpeg";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-black">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <img className="h-52" src={errorImage} alt="" />
          <h2 className="mb-8 font-extrabold text-4xl text-black">
            Awwww.... Don't Cry
          </h2>
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-7xl text-rose-500">
              <span className="sr-only">Error</span>404
            </h2>
            <h3 className="text-rose-800 text-4xl font-semibold">Not Found</h3>
            <p className="text-2xl font-semibold md:text-2xl mb-8 p-3">
              Sorry, We couldn't Find this Page Right Now.
            </p>
            <Link
              to="/home"
              className="px-8 py-3 font-semibold rounded bg-cyan-200 text-black hover:bg-cyan-400"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
