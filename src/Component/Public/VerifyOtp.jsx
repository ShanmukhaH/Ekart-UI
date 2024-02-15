import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState();

  const navigate = useNavigate();
  const email = sessionStorage.getItem("email"); // Retrieve email from session storage

  const handleVerfication = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8080/api/v1/verify-otp";
    const body = {
      email: email,
      otp: otp,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(URL, body, header);
      console.log(response);
      sessionStorage.removeItem("email");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center m-auto mt-16 w-fit border-yellow-100 border-2 shadow-2xl  rounded-xl">
      <div className="p-2 flex-col flex justify-center items-center w-72  bg-yellow-200 rounded-l-lg">
        <span className="p-2 font-mono font-bold text-5xl ">
          Verify Your OTP
        </span>
        <p className="p-2">OTP sent to Your registered email</p>
        <img
          src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"
          alt="Register Image"
          className="h-32 mt-20"
        />
      </div>

      <div className="p-2 flex-col flex justify-center items-center w-96 h-80">
        <input
          type="text"
          placeholder="email address"
          className="p-2 border-2 border-gray-500 w-80 h-10 rounded-xl " 
          onChange={(event) =>setOtp(event.target.value)}
        />{" "}
        <br />
        <button
          onClick={handleVerfication}
          className="p-2  border-gray-500 bg-amber-400 rounded-3xl font-bold font-sans w-80  justify-center"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
