import { testScore } from "@/shared/utils/testScore";
import { createSlice } from "@reduxjs/toolkit";

export interface currentTestState {
  id: number;
  name: string | null;
  lengthTest: number;
  correctAnswers: number;
  errors: number;
  evaluation: number;
  time: number;
}

const initialState: currentTestState = {
  id: 0,
  name: "",
  lengthTest: 0,
  correctAnswers: 0,
  errors: 0,
  evaluation: 0,
  time: 0,
};

export const currentTestSlice = createSlice({
  name: "currentTest",
  initialState,
  reducers: {
    addTestResult: (state, { payload }) => {
      (state.id = payload.id),
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
export const actionsTest = currentTestSlice.actions;
