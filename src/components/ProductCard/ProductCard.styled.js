import styled from "styled-components";

export const Stock = styled.p`
  color: ${({ stock }) => (stock ? "green" : "red")};
  text-transform: uppercase;
`;
