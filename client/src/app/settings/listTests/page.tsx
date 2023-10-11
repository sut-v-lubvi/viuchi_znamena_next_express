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

import React, { useEffect } from "react";
import { Kruk } from "@/widgets/NavMenu/style";
import { useDeleteTestMutation, useGetTestsQuery } from "@/redux/api/testApi";
import { Body, Container } from "./style";

export default function testList() {
  const { data } = useGetTestsQuery();
  const [deleteTest, { isError, isSuccess, error }] = useDeleteTestMutation();

  console.log(data);
  return (
    <Container>
      <Body>
        {data && (
          <List dense={true}>
            {data.map(({ id, icon, name }) => (
              <ListItem
                className="list_gap"
                key={id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" color="error">
                    <MdDeleteOutline onClick={deleteTest} />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Kruk
                    dangerouslySetInnerHTML={{
                      __html: icon,
                    }}
                  ></Kruk>
                </ListItemAvatar>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        )}
      </Body>
    </Container>
  );
}
