"use client";

import { TestListT } from "@/app/testing/page";
import { Description, Line, LinkTest, P, Test } from "@/app/testing/style";
import { useActions } from "@/redux/hooks/useActions";
import { Kruk } from "@/widgets/NavMenu/style";
import { type } from "os";

export default function TestItem({ id, icon, name, description }: TestListT) {
  const { nullCorrectAnswers } = useActions();
  return (
    <>
      <Test key={id}>
        <LinkTest
          onClick={() => {
            nullCorrectAnswers();
          }}
          href={`/testing/${id}`}
        >
          <P>
            <Kruk dangerouslySetInnerHTML={{ __html: icon }} />
          </P>
          <P>{name}</P>
        </LinkTest>
        <Description>{description}</Description>
        <Line></Line>
      </Test>
    </>
  );
}
