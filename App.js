import "./App.css";
// import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import Signup from "./CMP/Signup/Signup";
import Admin from "./CMP/Admin/Admin";
import Login from "./CMP/Login/Login";
import NotFound from "./CMP/NotFound/NotFound";
import Dashboard from "./CMP/Admin/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-panel" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

# command
 npm i material-icons@latest
