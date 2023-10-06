import { TestType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { testScore } from "@/shared/utils/testScore";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddTestI extends TestType {
  numberQuestions: number;
  deleteQuestionsArray: number[];
}

const initialState: AddTestI = {
  id: null,
  name: "",
  icon: "",
  questions: [],
  description: "",
  numberQuestions: 0,
  deleteQuestionsArray: [],
};

export const addTestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addTest: (state, { payload }) => {
      debugger;
      (state.id = 0), (state.name = payload.name);
      state.icon = payload.icon;
      for (let i = 1; i <= state.questions.length; i++) {
        state.questions[i - 1].id = i;
      }
      console.log("итого");
      console.log(state.questions);
    },
    addQuestions: (state, { payload }) => {
      let newQuestions = {
        id: state.numberQuestions + 1,
        image: "",
        znamya: payload.img,
        question: payload.questions,
        correctAnswersIds: [payload.correctAnswer],
        answers: [
          { id: 1, label: payload.option1 },
          { id: 2, label: payload.option2 },
          { id: 3, label: payload.option3 },
          { id: 4, label: payload.option4 },
        ],
      };
      state.numberQuestions = state.numberQuestions + 1;
      state.questions.push(newQuestions);
    },
    deleteQuestions: (state, { payload }) => {
      state.deleteQuestionsArray.push(payload);
      let minimal = state.deleteQuestionsArray.sort();
      console.log("minimal");
      console.log(minimal);
      state.deleteQuestionsArray = state.deleteQuestionsArray.filter(
        (e) => e !== minimal[0]
      );
      console.log("deleteQuestionsArray");
      console.log(state.deleteQuestionsArray);
      state.questions = state.questions.filter((e) => {
        return e.id !== minimal[0];
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const actionsAddTest = addTestSlice.actions;
