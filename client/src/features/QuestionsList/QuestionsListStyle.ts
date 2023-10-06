import { styled, css } from "styled-components";

export const Container = styled.div`
  display: grid;
  padding: 10px 10% 10px 10%;
  gap: 10px;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;
export const FlexItem = styled.div`
  align-items: center;
  align-self: center;
`;
