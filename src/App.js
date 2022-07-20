import React, { useEffect } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import Footer from "./components/Footer";

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./authentication/firebase";

function App() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [user, isLoading, error] = useAuthState(auth);

  useEffect(
    () => {
      // If Component login
      if (isLoading) {
        return;
      }

      // If Auth: null, back to login page
      if (!user) {
        navigate("/login");
      }
    },
    // dependency list
    [user, isLoading, navigate]
  );

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
