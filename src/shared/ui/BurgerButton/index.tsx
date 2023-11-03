"use client";
import style from "./style.module.css";

interface Props {
  stateMenu: boolean;
  setStateMenu: (stateMenu: boolean) => void;
}

export const BurgerButton = ({ stateMenu, setStateMenu }: Props) => {
  return (
    <div
      onClick={() => setStateMenu(!stateMenu)}
      className={
        stateMenu ? [style.menu_btn, style.active].join(" ") : style.menu_btn
      }
    >
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}></span>
    </div>
  );
};
