import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../LeftSideNav/LeftSideNav";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="mx-10 my-5">
      <div className="flex flex-col gap-10 w-full lg:flex-row mx-10 my-5">
        <div className="grid card bg-rose-200 rounded-box place-items-center shadow-lg">
          {courses.map((course) => (
            <LeftSideNav key={course.id} course={course}></LeftSideNav>
          ))}
        </div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center mr-10">
          content
        </div>
      </div>
    </div>
  );
};

export default Courses;
