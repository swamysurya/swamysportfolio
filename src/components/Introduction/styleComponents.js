import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Intro = styled.h1`
  color: blue;
  font-size: ${(props) => (props.outline ? "32px" : "20px")};
`;
