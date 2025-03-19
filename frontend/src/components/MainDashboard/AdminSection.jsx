import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/adminPages/Home";
import AuthComponent from "../dashboard/AuthComponent";
import Users from "../../pages/adminPages/Users";
import Event from "../../pages/adminPages/Event";
import Feedback from "../../pages/adminPages/Feedback";
import AddEvent from "../../pages/adminPages/AddEvent";
import AddVenue from "../../pages/adminPages/AddVenue";
import AddNewUser from "../../pages/adminPages/AddNewUser";
import Booking from "../../pages/adminPages/Booking";
import Login from "../../pages/userPages/Login";
import { EventInputs, userInputs, WeddingServices,venueInput,BlogInput } from "../../FormSource";
import AddWeddingPlanner from "../../pages/adminPages/AddWeddingPlanner";
import AddBlog from "../../pages/adminPages/AddBlog";

const AdminSection = () => {
  const ProtectRoute = ({ children, user }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <>
      <AuthComponent>
        {({ user, loading, error, dispatch: authDispatch }) => {
          return (
            <BrowserRouter>
              <Routes>
                <Route path="/">
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
                  <Route
                    index
                    element={
                      <ProtectRoute user={user}>
                        <Home />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="/users"
                    element={
                      <ProtectRoute user={user}>
                        <Users
                          authLoading={loading}
                          authError={error}
                          authDispatch={authDispatch}
                        />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="/new-users"
                    element={
                      <ProtectRoute user={user}>
                        <AddNewUser authLoading={loading} Inputs={userInputs} />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="/events"
                    element={
                      <Event
                        authLoading={loading}
                        authError={error}
                        authDispatch={authDispatch}
                      />
                    }
                  />
                  <Route
                    path="/new-events"
                    element={
                      <ProtectRoute user={user}>
                        <AddEvent authLoading={loading} Inputs={EventInputs} />
                      </ProtectRoute>
                    }
                  />

                  <Route
                    path="/add-venue"
                    element={
                      <ProtectRoute user={user}>
                        <AddVenue authLoading={loading} Inputs={venueInput} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="/add-blog"
                    element={
                      <ProtectRoute user={user}>
                        <AddBlog authLoading={loading} Inputs={BlogInput} />
                      </ProtectRoute>
                    }
                  />

                  <Route
                    path="/new-wedding-services"
                    element={
                      <ProtectRoute user={user}>
                        <AddWeddingPlanner
                          authLoading={loading}
                          Inputs={WeddingServices}
                        />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="/feedback"
                    element={
                      <Feedback
                        authLoading={loading}
                        authError={error}
                        authDispatch={authDispatch}
                      />
                    }
                  />
                  <Route
                    path="/booking"
                    element={
                      <Booking
                        authLoading={loading}
                        authError={error}
                        authDispatch={authDispatch}
                      />
                    }
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          );
        }}
      </AuthComponent>
    </>
  );
};

export default AdminSection;
