import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from '../../client/src/backend/pages/dashboard';
import { Provider } from "react-redux";
import store from "../../client/src/store/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "../src/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../src/actions/authActions";
// import { clearCurrentProfile } from "../src/actions/profileActions";
import adminRoutes from "../../client/src/routes/adminRoutes";
import customerRoutes from "../../client/src/routes/customerRoutes";
import guestRoutes from "../../client/src/routes/guestRoutes";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

//Pertains the user
if (localStorage.jwtToken) {
  //set Auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and is Authenticated
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // store.dispatch(clearCurrentProfile());
    //clear current Profile
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    const persistor = persistStore(store);

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <>
              <div className="container">
                <Switch>{guestRoutes}</Switch>
              </div>
              <Switch>{adminRoutes}</Switch>
              <Switch>{customerRoutes}</Switch>
            </>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
