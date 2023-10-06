import { actions } from "@/redux/actions/actions";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./hooks";

const rootActions = { ...actions };

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
