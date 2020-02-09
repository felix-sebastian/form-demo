import React from "react";
import styled from "styled-components";
import ui from "../ui";
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";
import Outer from "./outer";
import Footer from "./footer";
import Header from "./header";
import useForm from "./useForm";
import { Switch, Route, Redirect } from "react-router-dom";
import Success from "./success";

const { space: Space } = ui;

const Inner = styled.div`
  flex-grow: 1;
`;

export default () => {
  const {
    storeType,
    setStoreType,
    users,
    user,
    setUser,
    metroDetails,
    setMetroDetails,
    role,
    setRole,
    date,
    setDate,
    victoria,
    setVictoria,
    suburb,
    setSuburb,
    submit,
    hint
  } = useForm();

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
            <PageOne
              {...{
                storeType,
                setStoreType,
                users,
                user,
                setUser,
                metroDetails,
                setMetroDetails,
                hint
              }}
            />
          </Route>
          <Route path="/2">
            <PageTwo
              {...{
                role,
                setRole,
                date,
                setDate,
                victoria,
                setVictoria,
                suburb,
                setSuburb,
                hint
              }}
            />
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
            <Footer submit={submit} />
            <Space />
          </Route>
        </Switch>
      </Inner>
      <Space vertical />
    </Outer>
  );
};
