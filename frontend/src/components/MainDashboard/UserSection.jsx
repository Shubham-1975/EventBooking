import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthComponent from "../dashboard/AuthComponent";
import Home from "../../pages/userPages/Home";
import Login from "../../pages/userPages/Login";
import Register from "../../pages/userPages/Register";
import ForgotPassword from "../../pages/userPages/ForgotPassword";
import OurPortfolio from "../../pages/userPages/OurPortfolio";
import BookEvent from "../../pages/userPages/BookEvent";
import Contact from "../../pages/userPages/Contact";
import CorporateEvent from "../dashboard/userDashboard/ServicesSection/CorporateEvent";
import WeddingPlanner from "../dashboard/userDashboard/ServicesSection/WeddingPlanner";
import DestinationWedding from "../dashboard/userDashboard/ServicesSection/DestinationWedding";
import BeachWedding from "../dashboard/userDashboard/ServicesSection/BeachWedding";
import MusicEntertainment from "../dashboard/userDashboard/ServicesSection/MusicEntertainment";
import PrivateParty from "../dashboard/userDashboard/ServicesSection/PrivateParty";
import FindVenue from "../dashboard/userDashboard/FindVenue";
import YourBooking from "../dashboard/userDashboard/YourBooking";
import VenueIdShow from "../../pages/userPages/VenueIdShow";
import WeddingPhotoGraphy from "../dashboard/userDashboard/ServicesSection/WeddingPhotoGraphy";
import Catering from "../dashboard/userDashboard/ServicesSection/Catering";
import ViewProfile from "../../pages/userPages/ViewProfile";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

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
                  <Route
                    path="forgot-password"
                    element={
                      <ForgotPassword
                        authLoading={loading}
                        authError={error}
                        authDispatch={authDispatch}
                      />
                    }
                  />
                  <Route path="/register" element={<Register />} />
                  <Route path="/contact-us" element={<Contact user={user} />} />
                  <Route
                    path="/ourportfolio"
                    element={<OurPortfolio user={user} />}
                  />
                  <Route
                    path="/corporate-event"
                    element={<CorporateEvent user={user} />}
                  />
                   <Route
                    path="/wedding-photography"
                    element={<WeddingPhotoGraphy user={user} />}
                  />
                   <Route
                    path="/catering"
                    element={<Catering user={user} />}
                  />
                  <Route
                    path="/wedding-planner"
                    element={<WeddingPlanner user={user} />}
                  />
                  <Route
                    path="/destination-wedding"
                    element={<DestinationWedding user={user} />}
                  />
                  <Route
                    path="/beach-wedding"
                    element={<BeachWedding user={user} />}
                  />
                  <Route
                    path="/music-entertainment"
                    element={<MusicEntertainment user={user} />}
                  />
                  <Route
                    path="/private-party"
                    element={<PrivateParty user={user} />}
                  />
                  <Route
                    path="/find-venue"
                    element={<FindVenue user={user} />}
                  />
                  {/* need Login */}

                  <Route
                    path="/book-event/:id"
                    element={
                      <ProtectedRoute user={user}>
                        <BookEvent user={user} />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="find/:id"
                    element={
                      <ProtectedRoute user={user}>
                        <VenueIdShow user={user} />
                      </ProtectedRoute>
                    }
                  />
                   <Route
                    path="users/:id"
                    element={
                      <ProtectedRoute user={user}>
                        <ViewProfile user={user} />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/yourbooking"
                    element={
                      <ProtectedRoute user={user}>
                        <YourBooking user={user} />
                      </ProtectedRoute>
                    }
                  />
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
