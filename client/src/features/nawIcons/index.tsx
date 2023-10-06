import { LinkContainer, List, Repeat, Top } from "@/widgets/Finish/style";
import { type } from "os";
import React from "react";

type Props = {
  nullCorrectAnswers: () => void;
  id: number;
};

export default function NavIcons({ nullCorrectAnswers, id }: Props) {
  return (
    <>
      <LinkContainer
        onClick={() => {
          nullCorrectAnswers();
        }}
        href={`/testing/${id}`}
      >
        <Repeat />
      </LinkContainer>
      <LinkContainer
        onClick={() => {
          nullCorrectAnswers();
        }}
        href={`/testing`}
      >
        <List />
      </LinkContainer>
      <LinkContainer
        onClick={() => {
          nullCorrectAnswers();
        }}
        href={`/testing`}
      >
        <Top />
      </LinkContainer>
    </>
  );
}
