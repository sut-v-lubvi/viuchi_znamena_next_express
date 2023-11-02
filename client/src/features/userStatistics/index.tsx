"use client";

import { useGetTestStatisticsQuery } from "@/redux/api/userApi";
import { Container, Item, Result, Title } from "./style";
import { Alert, Button } from "@mui/material";
import { Line } from "@/app/testing/style";

export const UserStatistics = ({ userId }: any) => {
  const { data } = useGetTestStatisticsQuery(userId);
  return (
    <>
      {data && (
        <Container>
          {data.data.stat?.map((e) => (
            <Item key={e.testId}>
              <Title>{e.name}</Title>
              <Result>
                <Alert severity="success">{e.correctAnswers}</Alert>
                <Alert severity="error">{e.errorAnswers}</Alert>
              </Result>
              <Button href={`/testing/${e.testId}`} variant="outlined">
                Пройти ещё раз
              </Button>
              <Line></Line>
            </Item>
          ))}
        </Container>
      )}
    </>
  );
};
