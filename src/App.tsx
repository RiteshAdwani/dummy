import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="d-flex">
        <Sidebar toggleTheme={toggleTheme} darkMode={darkMode} />

        <div className="nav-and-body">
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="/video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
