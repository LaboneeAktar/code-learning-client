import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import backgroundImage from "../../assets/images/background.jpg";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <div className="relative">
        <img
          src={backgroundImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-5/12">
                <h2 className="max-w-lg mb-6 text-3xl tracking-tight text-white sm:text-4xl sm:leading-none">
                  Choose Your Course
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-300 md:text-lg text-justify">
                  A programming language is a type of written language that
                  tells computers what to do. Examples are: Python, PHP, Java,
                  JavaScript, C, & C++.
                  <br />
                  Get this courses and learn about programming language with
                  lessons, quizzes, and projects designed for real-life
                  scenarios. Create portfolio projects that showcase your new
                  skills to help land your dream job.
                </p>
                <Link to="/courses">
                  <button className="btn btn-info hover:btn-error text-normal normal-case text-lg">
                    <span className="mr-3">Get Course</span> <FaArrowRight />
                  </button>
                </Link>
              </div>
              <div className="">
                <div className="grid lg:grid-cols-3 gap-10 grid-cols-1">
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      aria-label="View Item"
                    >
                      <div>
                        <div className="w-60">
                          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                              className="object-cover w-full h-56 md:h-64 xl:h-80"
                              src={course.image}
                              alt=""
                            />
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                              <h1 className="text-lg font-medium tracking-wide text-white">
                                {course.title}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
