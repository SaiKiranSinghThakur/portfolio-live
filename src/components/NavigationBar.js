import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  const activeClass = "text-blue-500 border-b-2 border-blue-500";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-4xl shadow-sm p-4 flex justify-between items-center">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `tracking-wide font-semibold ${isActive ? activeClass : "text-gray-900"}`
        }
      >
        Home
      </NavLink>
      <div className="space-x-6">

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `font-medium ${isActive ? activeClass : "text-gray-900"}`
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `font-medium ${isActive ? activeClass : "text-gray-900"}`
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium ${isActive ? activeClass : "text-gray-900"}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
