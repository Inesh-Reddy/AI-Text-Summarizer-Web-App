import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "#478578",
          color: "#fff",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.8rem",
              fontWeight: "700",
              padding: "8px 12px",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#e0e0e0")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            AI Summarizer
          </Link>
          <Logout
            style={{
              padding: "8px 16px",
              backgroundColor: "#294641",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "background-color 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#c82333")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#dc3545")
            }
          />
        </div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "20px",
          }}
        >
          <li>
            <Link
              to="/dashboard"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "8px 12px",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#e0e0e0")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "8px 12px",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#e0e0e0")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "8px 12px",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#e0e0e0")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/not-found"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "8px 12px",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#e0e0e0")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Not Found
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
