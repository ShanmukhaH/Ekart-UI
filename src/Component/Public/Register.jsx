import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ role }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleregistation = async (event) => {
    event.preventDefault();

    //fire request to the server
    //using axios
    const URL = "http://localhost:8080/api/v1/register";
    const body = {
      email: username,
      password: password,
      userRole: role,
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
      sessionStorage.setItem('email', username); // Store email in session storage
      navigate("/verify-otp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center m-auto mt-16 w-fit border-lime-100 border-2 shadow-2xl  rounded-xl">
      <div className="p-2 flex-col flex justify-center items-center w-72  bg-lime-200 rounded-l-lg">
        <span className="p-2 font-mono font-bold text-2xl ">
          Looks like you new here!
        </span>
        <p className="p-2">
          Sign up with your{" "}
          <span className="font-medium">email & password</span> to get started
        </p>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
          alt="Register Image"
          className="h-32 mt-20"
        />
      </div>

      <div className="p-2 flex-col flex justify-center items-center w-96 h-60">
        <input
          type="text"
          placeholder="email address"
          onChange={(event) => setUsername(event.target.value)}
          className="p-2 border-2 border-gray-500 w-80 h-10 rounded-xl "
        />{" "}
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          className="p-2 border-2 border-gray-500  w-80 h-10 rounded-xl"
        />{" "}
        <br />
        <button
          onClick={handleregistation}
          className="p-2  border-gray-500 bg-amber-400 rounded-3xl font-bold font-sans w-80  justify-center"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Register;
