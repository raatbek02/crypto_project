import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { $host } from "../../../http";
import { login, registration } from "../../../http/userApi";
import { setIsAuth } from "../../../store/isAuth";
import { ADMIN } from "../../../utils/consts";

import "./AuthContent.css";

function AuthContent({ setModalAuth }) {
  const [hasAccount, setHasAccount] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpActive, setSignUpActive] = useState(false);
  const [signInActive, setSignInActive] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = async () => {
    const data = {
      email: email,
      username: userName,
      password: password,
    };
    await $host.post(`api/auth/users/`, data).then((res) => {
      console.log("success registr", res);
      // console.log(data.token);
    });
    //  try {
    //    let data = await registration(email, userName, password);
    //    setUserName("");
    //    setEmail("");
    //    setPassword("");

    //    console.log("registration data", data);
    //  } catch {}
  };

  const signIn = async () => {
    const data = {
      username: userName,
      password: password,
    };

    //  try {
    //    const data = await login(password, userName);

    //    console.log("Success login", data);
    //  } catch {}

    if (userName === "admin" && password === "admin12") {
      dispatch(setIsAuth(true));
      localStorage.setItem("isAuthLocal", true);
      navigate(ADMIN);
      setUserName("");
      setPassword("");
    } else {
      await $host.post(`api/auth/token/login/`, data).then(({ data }) => {
        console.log("success login", data);
        console.log(data.token);
      });
    }
  };

  return (
    <div className="authContent">
      <div className="authContent__titles">
        <span
          onClick={() => {
            setHasAccount(false);
            setSignUpActive(true);
            setSignInActive(false);
          }}
          className={signUpActive ? "active" : ""}
        >
          Create an account
        </span>
        <span
          onClick={() => {
            setHasAccount(true);
            setSignUpActive(false);
            setSignInActive(true);
          }}
          className={signInActive ? "active" : ""}
        >
          Login
        </span>
        {/* <span onClick={() => logout()}>Logout</span> */}
      </div>
      <div className="authContent__content">
        {hasAccount ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <p>
              {/* <label>UserName:</label> */}
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="text"
                placeholder="User name"
              />
            </p>
            <p>
              {/* <label>Password:</label> */}
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
            </p>
            <div className="authContent__button">
              <button
                onClick={() => {
                  setModalAuth(false)
                  signIn();
                }}
                type="submit"
              >
                SIGN IN
              </button>
            </div>
          </form>
        ) : (
          <>
            <form onSubmit={(e) => e.preventDefault()}>
              <p>
                {/* <label>UserName:</label> */}
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="text"
                  placeholder="User name"
                />
              </p>

              <p>
                {/* <label>Email:</label> */}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email address"
                />
              </p>
              <p>
                {/* <label>Password:</label> */}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </p>

              <div className="authContent__button">
                <button onClick={() => signUp()} type="submit">
                  SIGN UP
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthContent;
