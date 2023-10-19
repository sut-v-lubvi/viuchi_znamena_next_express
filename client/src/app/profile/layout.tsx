"use client";
import { Container, ContainerInfo, Correct, Title } from "./style";
import { Avatar, IconButton } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { BiPencil } from "react-icons/bi";
import { useGetUserQuery } from "@/redux/api/userApi";
import { useAuth } from "@/shared/hooks/useAuth";
import Image from "next/image";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, userId } = useAuth();

  const { data } = useGetUserQuery(userId);
  return (
    <>
      {data && (
        <Container>
          <ContainerInfo>
            {" "}
            <Avatar alt="Remy Sharp" sx={{ width: 130, height: 130 }}>
              {" "}
              <img src={`../../${data.avatar.path}`}></img>
            </Avatar>
            <Title>{data.email}</Title>
            <Correct>
              <IconButton
                edge="end"
                aria-label="delete"
                color="primary"
                href={`/profile/${userId}/addUserInfo`}
              >
                <BiPencil />
              </IconButton>
            </Correct>
          </ContainerInfo>
          {children}
        </Container>
      )}{" "}
    </>
  );
}
