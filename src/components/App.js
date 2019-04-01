import React from "react";
import { Route, Switch } from "react-router-dom";
import UserContainer from "../user/UserContainer";
import ChatContainer from "../chat/ChatContainer";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={UserContainer} />
        <Route exact path="/chat" component={ChatContainer} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
