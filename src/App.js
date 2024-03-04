import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  try {
    // eslint-disable-next-line
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    };
    return (
      <>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={alert} />
            <div className="container">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home showAlert={showAlert} />}
                ></Route>
                <Route
                  exact
                  path="/about"
                  element={<About showAlert={showAlert} />}
                ></Route>
                <Route
                  exact
                  path="/login"
                  element={<Login showAlert={showAlert} />}
                ></Route>
                <Route
                  exact
                  path="/signup"
                  element={<SignUp showAlert={showAlert} />}
                ></Route>
              </Routes>
            </div>
          </Router>
        </NoteState>
      </>
    );
    // eslint-disable-next-line
  } catch (err) {
    console.log("App-Err:", err.message);
  }
}

export default App;
