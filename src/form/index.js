import React from "react";
import styled from "styled-components";
import ui from "../ui";
import Outer from "./outer";
import Footer from "./footer";
import Header from "./header";
import { Switch, Route, Redirect } from "react-router-dom";
import Success from "./success";
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";

const { space: Space } = ui;

const Inner = styled.div`
  flex-grow: 1;
`;

export default () => {
  return (
    <Outer>
      <Space vertical />
      <Inner>
        <Switch>
          <Route path="/(1|2)">
            <Space />
            <Header />
            <Space />
          </Route>
        </Switch>
        <Switch>
          <Route path="/1">
            <PageOne storeType={0} users={[]} />
          </Route>
          <Route path="/2">
            <PageTwo />
          </Route>
          <Route path="/pending">
            <Success pending />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Redirect to="/1" />
        </Switch>
        <Switch>
          <Route path="/(1|2)">
            <Footer />
            <Space />
          </Route>
        </Switch>
      </Inner>
      <Space vertical />
    </Outer>
  );
};
