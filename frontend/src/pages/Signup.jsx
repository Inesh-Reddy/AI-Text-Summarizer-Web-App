import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (!username || !password) {
      alert("Please fill in both username and password fields");
      return;
    }

    const response = await axios.post(
      "http://localhost:3000/api/v1/user/auth/register",
      { email: username, password }
    );
    try {
      if (response.data.msg == "user created successfully") {
        navigate("/dashboard", { replace: true });
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/auth/",
          {
            email: username,
            password,
          }
        );

        const token = response.data.data;
        if (!token) {
          throw new Error("No token received from server");
        }

        localStorage.setItem("token", token);
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div style={{ maxWidth: "400px", padding: "20px", margin: "0 auto" }}>
      <h2>Signup</h2>
      <p>Please create your account.</p>
      <form onSubmit={onSubmitHandler}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            ref={usernameRef}
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
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
