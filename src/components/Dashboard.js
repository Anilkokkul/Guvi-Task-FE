import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="text-6xl text-center mt-10">{user.name}</div>
      <p className="text-center mt-10 text-2xl">Email: {user.email}</p>
      <p className="text-center mt-10 text-2xl">Mobile Number: {user.mobileNumber}</p>
    </>
  );
};

export default Dashboard;
