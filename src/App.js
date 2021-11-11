import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import MyOrder from "./Pages/MyOrder/MyOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Properties from "./Pages/Properties/Properties";
import PropertyDetail from "./Pages/Property/PropertyDetail";
import Registration from "./Pages/Registration/Registration";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";

function App() {
  return (
    <AuthProvider>
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route exact path="/properties">
            <Properties />
          </Route>
          <PrivateRoute path="/properties/:id">
            <PropertyDetail />
          </PrivateRoute>
          <PrivateRoute path="/myorder">
            <MyOrder />
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
