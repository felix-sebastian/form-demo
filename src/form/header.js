import React from "react";
import styled from "styled-components";
import ui from "../ui";
import { useLocation } from "react-router-dom";

const { space: Space } = ui;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Page = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #888;
`;

export default () => {
  const { pathname } = useLocation();
  return (
    <>
      <Title>Update user details</Title>
      <Space size={0.5} />
      <Page>Page {pathname.substr(1)} of 2</Page>
    </>
  );
};
