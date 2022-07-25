import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import DisplayImage from "./DisplayImage";
import Home from "./Home";
import { Component } from "react";
import ImageRetrive from "./ImageRetrive";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/displayImg" element={<DisplayImage />}></Route>
          {/* <Route exact path="/component  " element={<Component />}></Route> */}
          <Route exact path="/component" element={<ImageRetrive />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
