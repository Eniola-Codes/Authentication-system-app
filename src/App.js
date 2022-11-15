import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";

import HomePage from "./pages/HomePage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          {!authCtx.isLoggedIn && <AuthPage />}
          {authCtx.isLoggedIn && <Redirect to="/" />}
        </Route>
        <Route path="/profile">
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          {authCtx.isLoggedIn && <UserProfile />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
