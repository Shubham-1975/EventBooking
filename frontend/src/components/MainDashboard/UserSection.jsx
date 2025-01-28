import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthComponent from "../dashboard/AuthComponent";
import Home from "../../pages/userPages/Home";
import Login from "../../pages/userPages/Login";
import Register from "../../pages/userPages/Register";
import OurPortfolio from "../../pages/userPages/OurPortfolio";

const UserSection = () => {
  return (
    <>
      <AuthComponent>
        {({ user, loading, error, dispatch: authDispatch }) => {
          return (
            <>
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        user={user}
                        authLoading={loading}
                        authDispatch={authDispatch}
                      />
                    }
                  />
                  <Route
                    path="login"
                    element={
                      <Login
                        authLoading={loading}
                        authError={error}
                        authDispatch={authDispatch}
                      />
                    }
                  />
                  <Route path="/register" element={<Register />} />
                  <Route path="/ourportfolio" element={<OurPortfolio />} />
                </Routes>
              </BrowserRouter>
            </>
          );
        }}
      </AuthComponent>
    </>
  );
};

export default UserSection;
