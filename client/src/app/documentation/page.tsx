"use client";

import DocLinks from "@/features/docLinks";
import { BookIc, BookIc2, BookIc3, BookIc4, Title } from "./style";

export default function Documentation() {
  return (
    <>
      <Title>
        Ниже предоставленны ссылки на источники с материалами для изучения
        знаменной нотации.
      </Title>
      <DocLinks
        title={"Азбука церковнаго знаменнаго пения. Л.Ф. Калашников"}
        href={"http://znamennoe.ru/biblio/azbuka-cerkovnago-znamennago-peniya/"}
        Component={BookIc}
      />
      <DocLinks
        title={"Азбука знаменного пения старца Александра Мезенца"}
        href={
          "https://azbyka.ru/otechnik/books/file/24677-%D0%90%D0%B7%D0%B1%D1%83%D0%BA%D0%B0-%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D1%82%D0%B0%D1%80%D1%86%D0%B0-%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D0%9C%D0%B5%D0%B7%D0%B5%D0%BD%D1%86%D0%B0.pdf"
        }
        Component={BookIc2}
      />
      <DocLinks
        title={"Азбука демественнаго пения. Л.Ф. Калашников"}
        href={
          "https://vk.com/doc24928917_582977613?hash=SetOImmoQb39Gvw4iNJnDurdBGOwbAv80JTsBrNqVOX&dl=pRnhB4vtBVlh7wRIrZPkFigVbzHG4sQQKNyJLDoUWF4"
        }
        Component={BookIc3}
      />
      <DocLinks
        title={"Металлов Осмогласие знаменнаго распева"}
        href={
          "https://vk.com/doc24928917_582977640?hash=nJ2gVo2f1EyE1Rr4N3WcOwIeQDAnIWMH8C82anawOyP&dl=Y0YTIuI5A2Vb7cqQN6nXLKFb1A3SunXaCyb2zbUreZP"
        }
        Component={BookIc4}
      />
      <DocLinks
        title={"Пособие по изучению пения и чтения.Григорьев Е"}
        href={
          "https://vk.com/doc24928917_582977638?hash=GnsZEuxpdw80x9gMaUEjAYzm8tcNtxVXQTR3ilPXSDo&dl=DsSOuSCmC7HYT3E1cQBG2JyCLa2na9NvNZLK35KYIzo"
        }
        Component={BookIc}
      />
    </>
  );
}
