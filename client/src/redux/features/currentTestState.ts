import { testScore } from "@/shared/utils/testScore";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface currentTestState {
  id?: number | null;
  name: string | null;
  lengthTest: number;
  correctAnswers: number;
  errors: number;
  evaluation: number;
  time: number;
}

const initialState: currentTestState = {
  id: null,
  name: "",
  lengthTest: 0,
  correctAnswers: 0,
  errors: 0,
  evaluation: 0,
  time: 0,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addTestResult: (state, { payload }) => {
      (state.id = Number(payload.id)),
        (state.name = payload.name),
        (state.lengthTest = payload.lengthTest),
        (state.errors = payload.lengthTest - state.correctAnswers);
      state.evaluation = testScore(state.correctAnswers, state.lengthTest);
    },
    addCorrectAnswers: (state) => {
      state.correctAnswers += 1;
    },
    nullCorrectAnswers: (state) => {
      state.correctAnswers = 0;
      state.errors = 0;
    },
    addTestTime: (state, { payload }) => {
      state.time = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const actionsTest = testSlice.actions;
