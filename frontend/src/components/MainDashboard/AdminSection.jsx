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
import {
  EventInputs,
  userInputs,
  WeddingServices,
  venueInput,
  BlogInput,
  BeachInput,
} from "../../FormSource";
import AddBlog from "../../pages/adminPages/AddBlog";
import Services from "../../pages/adminPages/Services";
import AddCatering from "../../pages/adminPages/services/AddCatering";
import AddBeachWedding from "../../pages/adminPages/services/AddBeachWedding";
import AddMusicEntairment from "../../pages/adminPages/services/AddMusicEntairment";
import AddWeddingPlanner from "../../pages/adminPages/services/AddWeddingPlanner";
import AddDestinationWeddding from "../../pages/adminPages/services/AddDestinationWeddding";
import AddPrivateParty from "../../pages/adminPages/services/AddPrivateParty";
import ViewEvent from "../../pages/adminPages/View/ViewEvent";
import ViewUsers from "../../pages/adminPages/View/ViewUsers";
import ViewVenue from "../../pages/adminPages/View/ViewVenue";
import ViewBlog from "../../pages/adminPages/View/ViewBlog";
import ViewCatering from "../../pages/adminPages/View/ViewCatering";
import ViewPlanner from "../../pages/adminPages/View/ViewPlanner";
import ViewParty from "../../pages/adminPages/View/ViewParty";
import ViewMusic from "../../pages/adminPages/View/ViewMusic";
import ViewDestination from "../../pages/adminPages/View/ViewDestination";
import ViewBeach from "../../pages/adminPages/View/ViewBeach";
import AddPhotoGraphy from "../../pages/adminPages/services/AddPhotoGraphy";
import ViewPhotography from "../../pages/adminPages/View/ViewPhotography";

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
                    path="/services"
                    element={
                      <ProtectRoute user={user}>
                        <Services />
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
                    path="services/add-new-wedding-planner"
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
                    path="services/add-new-beach-wedding"
                    element={
                      <ProtectRoute user={user}>
                        <AddBeachWedding
                          authLoading={loading}
                          Inputs={BeachInput}
                        />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="services/add-new-photography"
                    element={
                      <ProtectRoute user={user}>
                        <AddPhotoGraphy
                          authLoading={loading}
                          Inputs={BlogInput}
                        />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="services/add-new-destination-wedding"
                    element={
                      <ProtectRoute user={user}>
                        <AddDestinationWeddding
                          authLoading={loading}
                          Inputs={BlogInput}
                        />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="services/add-new-catering-services"
                    element={
                      <ProtectRoute user={user}>
                        <AddCatering authLoading={loading} Inputs={BlogInput} />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="services/add-new-music-entairment"
                    element={
                      <ProtectRoute user={user}>
                        <AddMusicEntairment
                          authLoading={loading}
                          Inputs={BeachInput}
                        />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="services/add-new-private-party"
                    element={
                      <ProtectRoute user={user}>
                        <AddPrivateParty
                          authLoading={loading}
                          Inputs={BeachInput}
                        />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="events/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewEvent user={user} />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="users/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewUsers user={user} />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="venue/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewVenue user={user} />
                      </ProtectRoute>
                    }
                  />
                  <Route
                    path="blog/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewBlog user={user} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="catering/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewCatering user={user} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="destination/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewDestination user={user} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="planner/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewPlanner user={user} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="beach/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewBeach user={user} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="music/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewMusic user={user} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="party/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewParty user={user} />
                      </ProtectRoute>
                    }
                  />
                   <Route
                    path="photography/:id"
                    element={
                      <ProtectRoute user={user}>
                        <ViewPhotography user={user} />
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
