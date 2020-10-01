import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
      </div>
    </Router>
  );
}

export default App;
