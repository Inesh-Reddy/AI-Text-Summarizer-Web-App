import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div style={{ backgroundColor: "#61a092", borderRadius: "8px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
