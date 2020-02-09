import styled from "styled-components";
import text from "../../text";

export default styled(text)`
  border-radius: 0.25rem 0 0 0.25rem;
  box-shadow: none !important;
  &::placeholder {
    color: #555;
  }
`;
