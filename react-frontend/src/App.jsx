import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListEmployee from './components/ListEmployees';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" exact component={ListEmployee}></Route>
            <Route exact path="/employees" component={ListEmployee}></Route>
            <Route
              exact
              path="/add-employee/:id"
              component={CreateEmployee}
            ></Route>
            <Route
              exact
              path="/view-employee/:id"
              component={ViewEmployee}
            ></Route>
            <Route
              exact
              path="/update-employee/:id"
              component={UpdateEmployee}
            ></Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
