import Link from "next/link";
import styled from "styled-components";
import { BiSolidBookOpen } from "react-icons/bi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiBook } from "react-icons/fi";
import { BsJournalBookmark } from "react-icons/bs";

export const Title = styled.div`
  font-size: 14px;
  text-align: start;
  padding: 0px 20px 0px 30px;
  line-height: 1.3;
  text-align: center;
  color: rgb(66, 65, 65);
`;
export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
`;

const bookCss = `
align-self: center;
  width: 50px;
`;

export const BookIc = styled(BiSolidBookOpen)`
  ${bookCss}
`;

export const BookIc2 = styled(HiOutlineBookOpen)`
  ${bookCss}
`;

export const BookIc3 = styled(FiBook)`
  ${bookCss}
`;
export const BookIc4 = styled(BsJournalBookmark)`
  ${bookCss}
`;
export const BookLink = styled.a`
  &:active {
    font-size: 19px;
  }
  text-align: center;
  padding: 10px;
  font-size: 20px;
`;
