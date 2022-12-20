import React from "react";
import { Link } from "react-router-dom";

const LeftSideNav = ({ course }) => {
  const { id, title } = course;
  return (
    <div>
      <ul className="menu menu-compact lg:menu-normal w-56 p-2 rounded-box">
        <li>
          <Link to={`/courses/${id}`}>{title}</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideNav;
