import React from 'react';
import "../styles/app.scss"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Main from "./Main/Main.jsx"
import Profile from './Profile/Profile';


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/profile/:id" component={Profile}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;