import React, { useState } from "react";
import "../assets/css/Login.css";
import ImageLogin from "../assets/img/image-login.png";
import { StyledIcon } from "../components/StyledIcon";
import { ButtonStyle } from "../components/StyledComponents";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/auth/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token);
        const userType = decodedToken.role;

        Swal.fire({
          title: "Good job!",
          text: response.data.message,
          icon: "success",
          iconColor: "#01aa5a",
          confirmButtonColor: "#01aa5a",
        }).then(() => {
          if (userType === "admin" || userType === "superadmin") {
            console.log("Redirecting to /dashboard");
            window.location.href = `/dashboard`;
          } else {
            console.log("Redirecting to /");
            window.location.href = `/`;
          }
        });
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = error.response ? error.response.data.message : "Login failed. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: errorMessage,
        confirmButtonColor: "#f27474",
      });
    }
  };

  return (
    <div className="login-container">
      <section className="login-box">
        {/* Grid sebelah kiri */}
        <div className="left-grid">
          <div className="login-img">
            <p className="welcome">
              <b>Welcome!</b>
            </p>
            <p className="welcome-sub">
              Fill up your personal information and start journey with us.
            </p>
            <img src={ImageLogin} alt="Welcome" />
          </div>
        </div>

        {/* Grid sebelah kanan */}
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <center>
              <p>
                Sign in to <b>Febe</b>
                <b className="brand">Express</b>
              </p>

              <label htmlFor="email">
                {/* Mengganti size="20px" dengan size="lg" */}
                <StyledIcon icon={faUser} size="lg" color="black" />
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                required
                autoFocus
                value={username}
                onChange={handleUsernameChange}
              />

              <label htmlFor="password">
                {/* Mengganti size="20px" dengan size="lg" */}
                <StyledIcon icon={faLock} size="lg" color="black" />
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={handlePasswordChange}
              />

              <ButtonStyle
                style={{
                  padding: "10px 90px",
                  margin: "10px auto",
                  maxWidth: "440px",
                  width: "100%",
                }}
                type="submit"
              >
                <b>Sign in</b>
              </ButtonStyle>

              <p className="no-account">
                Don't have an account?
                <Link to="/register" className="sign-up-link">
                  <b> Sign up.</b>
                </Link>
              </p>
            </center>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
