import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Logout;
