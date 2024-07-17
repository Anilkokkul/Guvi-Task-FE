import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-20 bg-green-300 p-3 shadow-lg">
        <h1 className="text-3xl leading-7">Logo</h1>
        <div>
          <ul className="flex justify-center items-center gap-6">
            <Link to={"login"}>Login</Link>{" "}
            <Link to={"register"}>Register</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
