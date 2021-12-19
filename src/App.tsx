import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./Pages/Overview";
class App extends Component {
  render() {
    return (
      <Router>
        <SideBar />
        <Routes>
          <Route path="/overview" element={<Overview/>}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
