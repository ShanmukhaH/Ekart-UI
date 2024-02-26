import React from "react";
import { useAuth } from "../Context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import navs from "./Navigations";



// const user = {
//   username: "",
//   role: "CUSTOMER",
//   isAuthenticated: false,
// };

// const { role, isAuthenticated } = user;

const AllRoutes = () => {

  const {auth } = useAuth();
  const {username,role, isAuthenticated} = auth;

  const routes = () => {
    return (
      <Route path="/" element={<App/>}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    );
  };

  return(
    <Routes>
      {routes()}
    </Routes>
  )
};

export default AllRoutes;
