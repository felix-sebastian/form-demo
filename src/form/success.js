import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/icons/CheckCircleOutlineTwoTone";
import CircularProgress from "@material-ui/core/CircularProgress";
import ui from "../ui";
import inputs from "../form/inputs";
import { useHistory } from "react-router-dom";

const { space: Space } = ui;
const { button: Button } = inputs;

const Box = styled.div`
  padding: 1rem;
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  align-items: center;
  color: ${({ pending }) => (pending ? "#888" : "#298a28")};
`;

export default ({ pending }) => {
  const history = useHistory();

  return (
    <Box pending={pending}>
      <Space size={0.75} />
      {pending ? (
        <>
          <Space size={0.25} />
          <CircularProgress style={{ color: "#0058a6" }} />
          <Space size={0.75} />
        </>
      ) : (
        <>
          <Icon style={{ fontSize: "3rem" }} />
        </>
      )}
      <Space size={0.25} />
      {pending ? "Submitting..." : "Success!"}
      {!pending && (
        <>
          <Space size={2} />
          <Button handleClick={() => history.push("/1")} minimal>
            Start again
          </Button>
        </>
      )}
      <Space size={1} />
    </Box>
  );
};
