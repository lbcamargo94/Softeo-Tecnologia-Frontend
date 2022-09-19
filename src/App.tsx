import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import "./styles/index.css";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Router>
      <Header />
      <MenuBar />
      <Routes />
    </Router>
  );
}

export default App;
