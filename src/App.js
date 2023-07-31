import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPages from "pages/LandingPages";
import 'assets/scss/style.scss'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" Component={LandingPages}></Route>
      </Router>
    </div>
  );
}

export default App;
