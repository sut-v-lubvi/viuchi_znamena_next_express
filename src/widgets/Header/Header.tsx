"use client";
import { BurgerButton } from "@/shared/ui/BurgerButton";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";
import { FalseBlock, HeaderContainer, HeaderTitle, Red, Title } from "./style";
import LogoutButton from "@/features/logOutButton";
import { useAppSelector } from "@/redux/hooks/hooks";

export default function Header() {
  const [stateMenu, setStateMenu] = useState<boolean>(false);
  const { isAuthenticated } = useAppSelector((state) => state.user);
  return (
    <>
      <HeaderContainer $stateMenu={stateMenu}>
        <div>
          <BurgerButton stateMenu={stateMenu} setStateMenu={setStateMenu} />
        </div>
        <HeaderTitle>
          <Title>
            <Red>З</Red>намена
          </Title>
        </HeaderTitle>
        <FalseBlock>{isAuthenticated && <LogoutButton />}</FalseBlock>
      </HeaderContainer>
      <NavMenu stateMenu={stateMenu} setStateMenu={setStateMenu} />
    </>
  );
}
