import styled from "styled-components";

export default styled.div`
  border-radius: 0.25rem;
  box-shadow: ${({ focused }) => (focused ? "0px 0px 2px 2px #7f9ab1" : "")};
  display: flex;
  cursor: pointer;
`;
