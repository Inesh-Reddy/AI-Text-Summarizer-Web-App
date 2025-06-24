import React from "react";

const Signup = () => {
  const onSubmitHandler = () => {};
  return (
    <div style={{ maxWidth: "400px", padding: "20px", margin: "0 auto" }}>
      <h2>Signup</h2>
      <p>Please create your account.</p>
      <form onSubmit={onSubmitHandler}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            placeholder="Enter username or email"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "3px",
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
            background: "#007bff",
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
