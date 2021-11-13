import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Properties from "./Pages/Properties/Properties";
import PropertyDetail from "./Pages/Property/PropertyDetail";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <AuthProvider>
      <Router>
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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/properties/:id">
            <PropertyDetail />
          </PrivateRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
