import React from "react";
import { useLoaderData } from "react-router-dom";
// import LeftSideNav from "../LeftSideNav/LeftSideNav";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div className="mx-10 my-5">
      <h1 className="text-2xl px-2">Programming Languages</h1>
      <div className="flex flex-col gap-10 w-full lg:flex-row my-5">
        <div className="grid card bg-cyan-300 rounded-box place-items-center shadow-lg h-96">
          {courses.map((course) => (
            <LeftSideNav key={course.id} course={course}></LeftSideNav>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 flex-grow card rounded-box place-items-center mr-10">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
