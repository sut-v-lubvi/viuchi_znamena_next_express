"use client";

import { BookContainer, BookLink } from "@/app/documentation/style";
import { Line } from "@/app/testing/style";

export default function DocLinks({ title, href, Component }: any) {
  return (
    <>
      <BookContainer>
        <Component />
        <BookLink href={href}>{title}</BookLink>
      </BookContainer>
      <Line></Line>
    </>
  );
}
