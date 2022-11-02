import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./Page/Dashboard";
import Entry from "./Page/Entry";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path="/" element={<Entry />}></Route>
        <Route  path="/home" element={<Dashboard />}></Route>
      </Routes>
      </div>
  );
}

export default App;
