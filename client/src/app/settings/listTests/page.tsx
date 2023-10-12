"use client";

import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";

import React, { useEffect } from "react";
import { Kruk } from "@/widgets/NavMenu/style";
import { useDeleteTestMutation, useGetTestsQuery } from "@/redux/api/testApi";
import { Body, Container, ContainerButton, ListContainer, Text } from "./style";
import Link from "next/link";

export default function TestList() {
  const { data } = useGetTestsQuery();
  const [deleteTest, { isError, isSuccess, error }] = useDeleteTestMutation();
  console.log(data);
  return (
    <Container>
      {data &&
        data.map(({ id, icon, name }) => (
          <ListContainer>
            <Kruk
              dangerouslySetInnerHTML={{
                __html: icon,
              }}
            ></Kruk>
            <Text>{name}</Text>
            <IconButton
              edge="end"
              aria-label="delete"
              color="info"
              onClick={() => deleteTest(id)}
            >
              <BiPencil>
                <Link href={`/settings/${id}`}></Link>
              </BiPencil>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              color="error"
              onClick={() => deleteTest(id)}
            >
              <MdDeleteOutline />
            </IconButton>
          </ListContainer>
        ))}
    </Container>
  );
}
