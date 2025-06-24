import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const userName = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!userName || !password) {
      alert("Please fill in both username and password fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/auth/",
        {
          email: userName,
          password,
        }
      );

      const token = response.data.data;
      if (!token) {
        throw new Error("No token received from server");
      }

      localStorage.setItem("token", token);

      navigate("/dashboard", { replace: true });

      userNameRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Login failed. Please check credentials and try again.";
      alert(errorMessage);
      console.error("Login error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", padding: "20px", margin: "0 auto" }}>
      <h2>Login</h2>
      <p>Please enter your credentials to access your account.</p>
      <form onSubmit={onSubmitHandler}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            ref={userNameRef}
            style={{
              width: "75%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "7px",
              backgroundColor: "#dbece7",
              border: "1px solid #ccc",
            }}
            placeholder="Enter username or email"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            ref={passwordRef}
            style={{
              width: "75%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "7px",
              backgroundColor: "#dbece7",
              border: "1px solid #ccc",
            }}
            placeholder="Enter password"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#253c38",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
