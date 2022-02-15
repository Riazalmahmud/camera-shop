import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Mainpage/About/About.js";
import Home from "./Mainpage/Home/Home.js";
import Contact from "./Mainpage/Contact/Contact.js";
import Notfound from "./Mainpage/Notfound/Notfound.js";
import Navigation from "./Sharepage/Navigation/Navigation.js";
import Shop from "./Mainpage/Shop/Shop.js";
import Footer from "./Mainpage/Footer/Footer.js";
import Login from "./Sharepage/Login/Login.js";
import Register from "./Sharepage/Register/Register.js";
import AuthProvider from "./context/AuthProvider/AuthProvider.js";
import AddProduct from "./Sharepage/AddProduct/AddProduct.js";
import Feedback from "./Sharepage/Feedback/Feedback.js";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/AddProduct">
              <AddProduct />
            </Route>
            <Route path="/Feedback">
              <Feedback />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
