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

export default function Rating() {
  const { data } = useGetUsersQuery();
  console.log(data);
  return (
    <>
      {data && (
        <Container>
          <List>
            {data.data.users.map((e) => (
              <ListItem key={e._id}>
                <ListItemAvatar>
                  <Avatar>
                    <CgProfile />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Link href={`/profile/${e._id}`}>{e.email}</Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Container>
      )}
    </>
  );
}
