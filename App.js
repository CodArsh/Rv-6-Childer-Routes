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
import "@fontsource/source-sans-pro";
import AuthGuard from "./guard/AuthGuard";
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
            <Route element={<AuthGuard />} >
              <Route path="/admin-panel" element={<Admin />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Route>
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



create hooks folder in src
npm i axios
npm i react-bootstrap-sweetalert
npm i universal-cookies
create guard folder in src


redux
---------------
npm i redux-logger
npm i redux-thunk
npm i font-awesome

// Extra
resume worded (site)


#Plan_B
https://we.tl/t-ZH69haeO0W
