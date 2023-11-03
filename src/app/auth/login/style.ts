import { styled, css } from "styled-components";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

export const FormTest = styled(Box)`
  margin-bottom: 20px;
  display: grid;
  justify-content: center;
  gap: 15px;
`;
export const ButtonLog = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;
export const Error = styled.div`
  font-size: 14px;
  color: red;
`;

export const Progress = styled(CircularProgress)`
  align-items: center;
  align-self: center;
`;
