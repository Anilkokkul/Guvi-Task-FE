import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !userDetails.name ||
        !userDetails.email ||
        !userDetails.mobileNumber ||
        !userDetails.password
      ) {
        return alert("Please fill all the fields");
      }
      const res = await axios.post(
        "http://localhost:5000/register",
        userDetails
      );
      alert(res.data.message);
      setUserDetails({ name: "", mobileNumber: "", email: "", password: "" });
    } catch (error) {
      alert(error.response.data.message);
      if (
        error.response.data.message ===
        "User already exist with the given Email Id"
      ) {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <div className=" w-full mt-20 sm:w-96 mx-auto border p-3 rounded shadow-md">
        <h1 className=" text-4xl text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userDetails.name}
              onChange={onChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="mobileNumber"
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Enter mobile Number address"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userDetails.mobileNumber}
              onChange={onChange}
            />
          </div>
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
            value="Register"
            className="w-full border border-gray-300 rounded-md p-2 mt-2 bg-green-400 cursor-pointer"
          />
          <Link to={"/login"}>
            <input
              type="button"
              value="Login"
              className="w-full border border-gray-300 rounded-md p-2 mt-2 bg-green-400 cursor-pointer"
            />
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
