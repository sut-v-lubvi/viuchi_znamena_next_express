"use client";

import { Title } from "@/widgets/Finish/style";
import { Red } from "@/widgets/Header/style";
import { Description } from "./style";

export default function Home() {
  return (
    <>
      <Title>
        <Red>Д</Red>обро пожаловать!
      </Title>
      <Description>
        Это приложение созданно с целью помочь в изучении знаменной нотации,
        посредством тестирования.
      </Description>
    </>
  );
}
