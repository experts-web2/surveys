import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory, Switch, Route } from "react-router-dom";
import { Settings, Users } from "../index";

export const Admin = () => {
  const history = useHistory();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push("/settings")}>
            Settings
          </Nav.Link>
          <Nav.Link onClick={() => history.push("/users")}>Users</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path={"/settings"} component={Settings} />
        <Route exact path={"/users"} component={Users} />
      </Switch>
    </div>
  );
};
