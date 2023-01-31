import "./App.css";
// import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import Signup from "./CMP/Signup/Signup";
import Admin from "./CMP/Admin/Admin";
import Login from "./CMP/Login/Login";
import NotFound from "./CMP/NotFound/NotFound";
import Dashboard from "./CMP/Admin/Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  deepPurple,
  deepOrange,
  cyan,
  teal,
  pink,
  lightBlue,
} from "@mui/material/colors";
import "@fontsource/source-sans-pro"
function App() {
  const Theme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: teal,
      error: pink,
      warning: deepOrange,
      success: cyan,
      info: lightBlue,
    },
    typography: {
      fontFamily: "Source Sans Pro",
    },
  });
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<h1>Homepage</h1>} /> */}
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-panel" element={<Admin />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;


# command
 npm install react-responsive
 npm i @fontsource/source-sans-pro
