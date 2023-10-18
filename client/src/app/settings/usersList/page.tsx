"use client";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Container } from "./style";
import { useGetUsersQuery } from "@/redux/api/userApi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function UsersList() {
  const { data } = useGetUsersQuery();
  console.log(data);
  return (
    <>
      {data && (
        <Container>
          <List>
            {data.map((e) => (
              <ListItem key={e.id}>
                <ListItemAvatar>
                  <Avatar>
                    <CgProfile />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Link href={`/profile/${e.id}`}>{e.email}</Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Container>
      )}
    </>
  );
}
