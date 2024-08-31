import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-4 p-4 bg-gray-200">
          <li>
            <Link to="/home" className="text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-600">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
