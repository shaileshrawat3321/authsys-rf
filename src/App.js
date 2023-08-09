import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
