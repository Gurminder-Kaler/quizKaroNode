import GuestRoute from "../common/GuestRoute";
import { Route } from "react-router-dom";

import RegisterPage from "../frontend/pages/auth/RegisterPage";
import LoginPage from "../frontend/pages/auth/LoginPage";
let array = [
  <Route exact path="/" component={LoginPage} />,
  // <GuestRoute exact path="/" component={LoginPage} />,
  <Route exact path="/register" component={RegisterPage} />,
  // <GuestRoute exact path="/register" component={RegisterPage} />,
  <Route exact path="/login" component={LoginPage} />,
  // <GuestRoute exact path="/login" component={LoginPage} />,
];

export default array;
