import React from "react";
import { Redirect, Route } from "react-router";

import { Switch } from "react-router";
import Layout from "./components/layout/Layout";

import HomePage from "./components/pages/HomePage";

import { useContext } from "react";
import AuthContext from "./components/store/auth-context";

const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const ProfilePage = React.lazy(() =>
  import("./components/Profile/UserProfile")
);
const AuthPage = React.lazy(() => import("./components/pages/AuthPage"));

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          {isLoggedIn && <ProfilePage />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          {isLoggedIn && <NewQuote />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
