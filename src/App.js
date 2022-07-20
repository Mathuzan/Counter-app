
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import DisplayImage from "./DisplayImage";


import Home from "./Home";


function App() {
  return (
    <div>
      {/* <Home /> */}
      <Router>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/displayImg" element={<DisplayImage/>}></Route>
              </Routes>
      </Router>
    </div>
  );
}

export default App;
