import React from "react";
import { Link } from "react-router-dom";

const LeftSideNav = ({ course }) => {
  const { title } = course;
  return (
    <div>
      <ul className="menu menu-compact lg:menu-normal w-56 p-2 rounded-box">
        <li>
          <Link>{title}</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideNav;
