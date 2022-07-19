import React from "react";
import { useNavigate } from "react-router-dom";
import { signOutFromApps } from "../authentication/firebase";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await signOutFromApps();
    navigate("/login");
  };

  // @todo: update styling navbar
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={buttonLogoutOnClickHandler}
      >
        Logout
      </button>
    </>
  );
};

export default NavBar;
