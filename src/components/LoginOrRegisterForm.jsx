// Di sini kita harus menggunakan useEffect
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Pada bagian ini sekarang kita membutuhkan fungsi untuk melakukan login dan register
import {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerWithEmailAndPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(
    () => {
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );

  return (
    <div className="min-h-full flex">
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={process.env.PUBLIC_URL+"assets/images/login/ProfilePicture.svg"}
          alt="Login Images Default"
        />
      </div>
      <div className="bg-black flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mt-6">
            <div className="space-y-6">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="EMAIL"
                  required
                  className="appearance-none block w-full px-3 py-4 border border-gray-700 text-midGray bg-black opacity-7 rounded-md sm:text-sm"
                  value={credential.email}
                  onChange={textFieldEmailOnChangeHandler}
                />
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="PASSWORD"
                  required
                  className="appearance-none block w-full px-3 py-4 border border-gray-700 text-midGray bg-black opacity-7 rounded-md sm:text-sm"
                  value={credential.password}
                  onChange={textFieldPasswordOnChangeHandler}
                />
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-red-900"
                  onClick={buttonLoginOrRegisterOnClickHandler}
                >
                  {loginOrRegister === "login" ? "LOGIN" : "SIGN UP"}
                </button>
                {loginOrRegister === "login" ? (
                  <Link to="/register">
                    <div className="w-full flex justify-center mt-1 text-gray-500">or do you want Register ?</div>
                  </Link>
                ) : (
                  <Link to="/login">
                    <div className="w-full flex justify-center mt-1 text-gray-500">or do you want Login ?</div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrRegisterForm;
