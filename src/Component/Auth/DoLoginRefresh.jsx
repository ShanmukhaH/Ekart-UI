import axios from "axios";
import React from "react";


import { useNavigate } from "react-router-dom";

const DoLoginRefresh = () => {

  const navigate = useNavigate();

  const refresh = async () => {
    // logic for referesh the at
    const URL = "http://localhost:8080/api/v1/refresh-token";

    try {
      const response = await axios.post(URL,[], {
        withCredentials: true,
      });
      if (response.status === 200) {
        
        const user = {
          userId: response.data.data.userId,
          userName: response.data.data.userName,
          userRole: response.data.data.userRole,
          isAuthenticated: response.data.data.authenticated,
          accessExpiration: response.data.data.accessExpiration,
          refereshExpiration: response.data.data.refereshExpiration,
        };
        return user;
      }
    } catch (error) {
      console.log(error);
      // window.alert(error.data.message);
    }
  };

  const validateAndRefresh = async () => {
    // 1.if rt is expired redirect to login
    const userString = localStorage.getItem("user");
    if (userString && userString !== "{}") {
      const user = JSON.parse(userString);
      if (new Date(user.refereshExpiration) > new Date()) {
        if (new Date(user.accessExpiration) > new Date()) {
          return user;
        } else {
          return await refresh();
        }
      } else {
        navigate("/login");
      }
    } else {
      navigate("/");
    }
  };

  return {validateAndRefresh};
};

export default DoLoginRefresh;
