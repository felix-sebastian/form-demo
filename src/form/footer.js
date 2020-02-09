import React from "react";
import styled from "styled-components";
import inputs from "./inputs";
import { useLocation, useHistory, Switch, Route } from "react-router-dom";

const { button: Button } = inputs;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({ submit }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Box>
      <Button
        handleClick={() => history.push("/1")}
        disabled={pathname === "/1"}
        testId="page-back"
      >
        Back
      </Button>
      <Switch>
        <Route path="/1">
          <Button handleClick={() => history.push("/2")} testId="page-forward">
            Next page
          </Button>
        </Route>
        <Route path="/2">
          <Button handleClick={submit}>Submit</Button>
        </Route>
      </Switch>
    </Box>
  );
};
