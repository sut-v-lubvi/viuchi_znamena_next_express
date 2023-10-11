"use client";

import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";

import React, { useEffect } from "react";
import { Kruk } from "@/widgets/NavMenu/style";
import { useGetTestsQuery } from "@/redux/api/testApi";

export default function AddTest() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  useEffect(() => {}, []);
  const { data, error } = useGetTestsQuery();
  console.log(data);
  return (
    <>
      {data && (
        <List dense={dense}>
          {data.map(({ id, icon, name }) => (
            <ListItem
              key={id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" color="error">
                  <MdDeleteOutline />
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
              <ListItemText
                primary={name}
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
