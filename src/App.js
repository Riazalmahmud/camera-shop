import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Mainpage/About/About.js";
import Home from "./Mainpage/Home/Home.js";
import Contact from "./Mainpage/Contact/Contact.js";
import Notfound from "./Mainpage/Notfound/Notfound.js";
import Navigation from "./Sharepage/Navigation/Navigation.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
