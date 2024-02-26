import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8080/api/v1/login";
    const BODY = {
      email: email,
      password: password,
    };

    // for configuring the data (BODY)
    const HEADERS = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      console.log(email, password);
      const response = await axios.post(URL, BODY, HEADERS);
      if (response.status === 200) {
        console.log(response);
        const user = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticated,
          accessExpiraion: response.data.data.accessExpiraion,
          refreshExpiration: response.data.data.refreshExpiration,
        };
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        console.log(auth);
        window.alert("Login Successfully !");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      // console.log("FAILED");
      window.alert("Login Failed.. " + error.response.data.rootcause);
    }
  };

  return (
    <div className="flex justify-center m-auto mt-16 w-fit border-yellow-100 border-2 shadow-2xl  rounded-xl">
      <div className="p-2 flex-col flex justify-center items-center w-72  bg-yellow-200 rounded-l-lg">
        <span className="p-2 font-mono font-bold text-5xl ">Login</span>
        <p className="p-2">
          Get access to your Orders, Wishlist and Recommendations
        </p>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
          alt="Register Image"
          className="h-32 mt-20"
        />
      </div>

      <div className="p-2 flex-col flex justify-center items-center w-96 h-80">
        <input
          type="text"
          placeholder="email address"
          onChange={(event) => setEmail(event.target.value)}
          className="p-2 border-2 border-gray-500 w-80 h-10 rounded-xl "
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          className="p-2 border-2 border-gray-500  w-80 h-10 rounded-xl"
        />{" "}
        <br />
        <button
          onClick={handleLogin}
          className="p-2  border-gray-500 bg-amber-400 rounded-3xl font-bold font-sans w-80  justify-center"
        >
          SUBMIT
        </button>
        <a href="/customer/register" className="text-blue-600 mt-20 ">
          New to eKart ? Create an account
        </a>
      </div>
    </div>
  );
};

export default Login;
