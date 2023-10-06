import Link from "next/link";
import { styled, css } from "styled-components";
import { RiVipCrownLine } from "react-icons/ri";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuSettings } from "react-icons/lu";

export const Links = styled(Link)`
  &:hover {
    cursor: pointer;
  }
  &:active {
    font-size: 25px;
  }

  width: 100%;
  transition: transform 0.1s;
  text-align: start;
  font-size: 26px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  line-height: 100%;
`;

export const Container = styled.div`
  border-radius: 20px;
  margin: 30px 15px 30px 15px;
  border: solid 2px rgb(48, 48, 48);
  width: 100vw;
  max-height: 87vh;
  display: flex;
  justify-content: center;
`;
export const FlexContainer = styled.div`
  padding-top: 40px;
  align-items: flex-start;
  align-self: flex-start;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
`;

export const Menu = styled.div<{ $stateMenu: boolean }>`
  display: flex;
  justify-content: center;
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 70px;
  left: 0px;
  transform: ${({ $stateMenu }) =>
    $stateMenu ? `translateY(0)` : `translateY(-100%)`};
  transition: transform 0.5s;
  background-color: white;
`;

export const Icon = styled.img`
  margin-right: 16px;
  width: 33px;
  height: auto;
  display: inline-block;
`;

export const Kruk = styled.span`
  font-size: 34px;
  /* margin-right:10px; */
  width: 33px;
  height: auto;
  font-family: "znamenna";
`;

export const NavIcon = `

 width: 33px;
 height: auto;
display: inline-block;
`;

export const KingIc = styled(RiVipCrownLine)`
  ${NavIcon}
`;
export const Doc = styled(BsJournalBookmarkFill)`
  ${NavIcon}
`;
export const Help = styled(BiHelpCircle)`
  ${NavIcon}
`;
export const Prof = styled(CgProfile)`
  ${NavIcon}
`;
export const Settings = styled(LuSettings)`
  ${NavIcon}
`;
