import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      return alert("Please fill all the fields");
    }
    const res = await axios.post("http://localhost:5000/login", userDetails);

    console.log(res.data);

    console.log(userDetails);
  };
  return (
    <>
      <div className=" w-full mt-20 sm:w-96 mx-auto border p-3 rounded shadow-md">
        <h1 className=" text-4xl text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userDetails.email}
              onChange={onChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password here"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userDetails.password}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full border border-gray-300 rounded-md p-2 mt-2 bg-green-400 cursor-pointer"
          />
          <Link to={"/register"}>
            <input
              type="button"
              value="Register"
              className="w-full border border-gray-300 rounded-md p-2 mt-2 bg-green-400 cursor-pointer"
            />
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
